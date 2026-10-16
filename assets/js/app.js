import { copiedLabels, supportedLanguages, translations } from './i18n/index.js';

// figlet.js is pinned to a single version so the font files always match the parser.
const FONT_BASE_URL = 'https://cdn.jsdelivr.net/npm/figlet@1.8.0/fonts';
const FONT_TIMEOUT_MS = 15000;
const DEBOUNCE_MS = 600;
const STATUS_RESET_MS = 2000;
const COPY_RESET_MS = 2000;

const fonts = [
    { id: 'ANSI Shadow', hint: 'Bold 3D' },
    { id: 'Standard', hint: 'Classic' },
    { id: 'Slant', hint: 'Italic' },
    { id: 'Block', hint: 'Heavy' },
    { id: 'Doom', hint: 'Retro' },
    { id: 'Big', hint: 'Large' },
    { id: 'Banner3-D', hint: '3D' },
    { id: 'Bloody', hint: 'Horror' },
    { id: 'Bright', hint: 'Clean' },
    { id: 'Broadway', hint: 'Wide' },
    { id: 'Bulbhead', hint: 'Round' },
    { id: 'Calvin S', hint: 'Slim' },
    { id: 'Colossal', hint: 'Huge' },
    { id: 'Cyberlarge', hint: 'Cyber' },
    { id: 'Cybermedium', hint: 'Cyber' },
    { id: 'DOS Rebel', hint: 'DOS' },
    { id: 'Double', hint: 'Double' },
    { id: 'Efti Font', hint: 'Efti' },
    { id: 'Epic', hint: 'Epic' },
    { id: 'Fire Font-k', hint: 'Fire' },
    { id: 'Fraktur', hint: 'Gothic' },
    { id: 'Georgia11', hint: 'Serif' },
    { id: 'Ghost', hint: 'Spooky' },
    { id: 'Gradient', hint: 'Grad' },
    { id: 'Graffiti', hint: 'Street' },
    { id: 'Hollywood', hint: 'Movie' },
    { id: 'Isometric1', hint: 'Iso' },
    { id: 'Isometric2', hint: 'Iso' },
    { id: 'Isometric3', hint: 'Iso' },
    { id: 'Isometric4', hint: 'Iso' },
    { id: 'JS Block Letters', hint: 'Block' },
    { id: 'Keyboard', hint: 'Keys' },
    { id: 'Larry 3D', hint: '3D' },
    { id: 'Lean', hint: 'Lean' },
    { id: 'Letters', hint: 'Letters' },
    { id: 'Linux', hint: 'Linux' },
    { id: 'Modular', hint: 'Mod' },
    { id: 'Morse', hint: '...' },
    { id: 'Nancyj-Fancy', hint: 'Fancy' },
    { id: 'Ogre', hint: 'Fantasy' },
    { id: 'Old Banner', hint: 'Old' },
    { id: 'Pawp', hint: 'Pop' },
    { id: 'Peaks', hint: 'Sharp' },
    { id: 'Poison', hint: 'Toxic' },
    { id: 'Puffy', hint: 'Soft' },
    { id: 'Rectangles', hint: 'Rect' },
    { id: 'Rozzo', hint: 'Round' },
    { id: 'Shadow', hint: 'Shadow' },
    { id: 'Shimrod', hint: 'Wizard' },
    { id: 'Small', hint: 'Compact' },
    { id: 'Soft', hint: 'Soft' },
    { id: 'Star Wars', hint: 'SW' },
    { id: 'Stellar', hint: 'Space' },
    { id: 'Stop', hint: 'Stop' },
    { id: 'Sub-Zero', hint: 'Icy' },
    { id: 'Swamp Land', hint: 'Swamp' },
    { id: 'Sweet', hint: 'Sweet' },
    { id: 'Thick', hint: 'Thick' },
    { id: 'Thin', hint: 'Thin' },
    { id: 'Ticks', hint: 'Ticks' },
    { id: 'Tiles', hint: 'Tiles' },
    { id: 'Train', hint: 'Train' },
    { id: 'Trek', hint: 'Sci-Fi' },
    { id: 'Twisted', hint: 'Twisted' },
    { id: 'USA Flag', hint: 'USA' },
    { id: 'Univers', hint: 'Uni' },
    { id: 'Wavy', hint: 'Wave' },
    { id: 'Weird', hint: 'Weird' }
];

const FONT_IDS = new Set(fonts.map((font) => font.id));

const HTML_ESCAPES = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
};

const state = {
    lang: 'en',
    activeFont: 'ANSI Shadow',
    activeAlign: 'center',
    debounceId: null,
    statusTimerId: null,
    copyTimerId: null,
    // Incremented on every render request; results from older requests are discarded.
    renderId: 0,
    loadedFonts: new Set(),
    // Font downloads in progress, keyed by font name, so concurrent requests share one fetch.
    pendingFonts: new Map()
};

const elements = {};

function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, (char) => HTML_ESCAPES[char]);
}

// Art is written into an HTML block (<pre>) in the generated code, so only the characters
// that could start markup need escaping. Quotes stay readable.
function escapeArt(value) {
    return String(value).replace(/[&<>]/g, (char) => HTML_ESCAPES[char]);
}

function getFontItemId(fontId) {
    return `fitem-${fontId.replace(/ /g, '_').replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

function getUsageMarkup(text) {
    return escapeHtml(text)
        .replace('README.md', '<code class="inline-code">README.md</code>')
        .replace('&lt;pre&gt;', '<code class="inline-code">&lt;pre&gt;</code>')
        .replace('div', '<code class="inline-code">div</code>');
}

function getFooterMarkup(text) {
    return escapeHtml(text).replace('⭐', '<a href="https://github.com/readme-SVG/ascii-text-generator">⭐</a>');
}

function renderLanguageMenu() {
    elements.langMenu.innerHTML = supportedLanguages.map((languageCode) => {
        const languageCopy = translations[languageCode];
        const code = escapeHtml(languageCode);
        const hiddenClass = languageCode === state.lang ? '' : ' hidden';

        return `
            <button type="button" data-lang="${code}">
                <span class="check${hiddenClass}" id="check-${code}">✓</span>
                <span>${escapeHtml(languageCopy.languageMenuLabel)}</span>
            </button>
        `;
    }).join('');

    elements.languageButtons = Array.from(elements.langMenu.querySelectorAll('[data-lang]'));
}

function toggleLangMenu() {
    const isOpen = elements.langMenu.classList.toggle('open');
    elements.langToggleBtn.setAttribute('aria-expanded', String(isOpen));
}

function closeLangMenu() {
    elements.langMenu.classList.remove('open');
    elements.langToggleBtn.setAttribute('aria-expanded', 'false');
}

function setStatus(stateName, message) {
    // Any new status replaces a pending auto-reset, so an old timer cannot hide a newer message.
    window.clearTimeout(state.statusTimerId);

    const copy = translations[state.lang];
    elements.statusDot.className = 'status-dot';
    elements.statusMsg.className = '';

    if (stateName === 'loading') {
        elements.statusDot.classList.add('loading');
        elements.statusMsg.textContent = message || copy.statusLoading;
        return;
    }

    if (stateName === 'ok') {
        elements.statusDot.classList.add('ok');
        elements.statusMsg.textContent = message || copy.statusOk;
        elements.statusMsg.classList.add('ok');
        return;
    }

    if (stateName === 'err') {
        elements.statusDot.classList.add('err');
        elements.statusMsg.textContent = message || copy.errGen;
        elements.statusMsg.classList.add('err');
        return;
    }

    elements.statusMsg.textContent = message || copy.statusReady;
}

function scheduleStatusReset() {
    state.statusTimerId = window.setTimeout(() => setStatus('ready'), STATUS_RESET_MS);
}

function updateLineNumbers(text) {
    const lineCount = text.split('\n').length;
    elements.lineNums.textContent = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');
    elements.lineCount.textContent = `${lineCount} ${translations[state.lang].linesSuffix}`;
    elements.statLines.textContent = String(lineCount);
    elements.statChars.textContent = String(text.length);
}

function renderFontList() {
    elements.fontList.innerHTML = fonts.map((font) => `
        <button class="font-item" id="${getFontItemId(font.id)}" type="button" data-font="${escapeHtml(font.id)}">
            <span class="font-dot"></span>
            <span class="font-name">${escapeHtml(font.id)}</span>
            <span class="font-hint">${escapeHtml(font.hint)}</span>
        </button>
    `).join('');

    elements.fontItems = Array.from(elements.fontList.querySelectorAll('[data-font]'));
    updateActiveFont();
}

// Only toggles the active class, so changing the font does not rebuild the whole list.
function updateActiveFont() {
    elements.fontItems.forEach((button) => {
        button.classList.toggle('active', button.dataset.font === state.activeFont);
    });
}

function switchTab(tabId) {
    elements.tabItems.forEach((button) => {
        const isActive = button.dataset.tab === tabId;
        button.classList.toggle('active', isActive);
        button.setAttribute('aria-selected', String(isActive));
    });

    elements.tabPanes.forEach((pane) => {
        pane.classList.toggle('active', pane.id === `pane-${tabId}`);
    });
}

function setAlignment(alignment) {
    state.activeAlign = alignment;
    elements.alignButtons.forEach((button) => {
        button.classList.toggle('active', button.dataset.align === alignment);
    });
    generateArt();
}

function updateLanguageChecks() {
    supportedLanguages.forEach((languageCode) => {
        const checkElement = document.getElementById(`check-${languageCode}`);

        if (checkElement) {
            checkElement.classList.toggle('hidden', languageCode !== state.lang);
        }
    });
}

function setLanguage(language) {
    const copy = translations[language];
    if (!copy) {
        return;
    }

    state.lang = language;

    closeLangMenu();
    elements.langBtnText.textContent = copy.langButton;
    updateLanguageChecks();

    elements.labelConfig.textContent = copy.labelConfig;
    elements.labelText.textContent = copy.labelText;
    elements.labelAlign.textContent = copy.labelAlign;
    elements.labelFonts.textContent = copy.labelFonts;
    elements.labelStats.textContent = copy.labelStats;
    elements.labelUsage.textContent = copy.labelUsage;
    elements.generateText.textContent = copy.btnGenerate;
    elements.tabCodeLabel.textContent = copy.tabCode;
    elements.tabPreviewLabel.textContent = copy.tabPreview;
    elements.optLeft.textContent = copy.optLeft;
    elements.optCenter.textContent = copy.optCenter;
    elements.optRight.textContent = copy.optRight;
    elements.statLabelLines.textContent = copy.statLines;
    elements.statLabelChars.textContent = copy.statChars;
    elements.usageText.innerHTML = getUsageMarkup(copy.usageText);
    elements.footerText.innerHTML = getFooterMarkup(copy.footerText);

    if (!copiedLabels.includes(elements.copyBtnText.textContent)) {
        elements.copyBtnText.textContent = copy.copyBtn;
    }

    setStatus('ready');
    updateLineNumbers(elements.outputCode.value || '');
}

function setFont(fontId) {
    if (!FONT_IDS.has(fontId)) {
        return;
    }

    state.activeFont = fontId;
    updateActiveFont();
    generateArt();
}

async function loadFontFile(font) {
    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), FONT_TIMEOUT_MS);

    try {
        const response = await fetch(`${FONT_BASE_URL}/${encodeURIComponent(font)}.flf`, {
            signal: controller.signal
        });
        if (!response.ok) {
            throw new Error('Unexpected response');
        }

        figlet.parseFont(font, await response.text());
    } catch {
        throw new Error(translations[state.lang].errFont);
    } finally {
        window.clearTimeout(timeoutId);
    }
}

// Downloads and parses a font once. Failed downloads are not cached, so a later attempt can retry.
function ensureFontLoaded(font) {
    if (state.loadedFonts.has(font)) {
        return Promise.resolve();
    }

    let pending = state.pendingFonts.get(font);
    if (!pending) {
        pending = loadFontFile(font)
            .then(() => {
                state.loadedFonts.add(font);
            })
            .finally(() => {
                state.pendingFonts.delete(font);
            });
        state.pendingFonts.set(font, pending);
    }

    return pending;
}

function renderOutput(result, align) {
    const code = `<div align="${align}">\n\n<pre>\n${escapeArt(result)}\n</pre>\n\n</div>`;
    elements.outputCode.value = code;
    updateLineNumbers(code);

    // Built with DOM APIs so the art is inserted as text and never parsed as HTML.
    const wrapper = document.createElement('div');
    wrapper.className = 'preview-content';
    wrapper.setAttribute('align', align);

    const pre = document.createElement('pre');
    pre.textContent = result;
    wrapper.append(pre);

    elements.previewArea.replaceChildren(wrapper);
}

async function generateArt() {
    // A direct request supersedes any debounced one that is still waiting.
    window.clearTimeout(state.debounceId);
    const requestId = ++state.renderId;
    const isStale = () => requestId !== state.renderId;

    if (typeof figlet === 'undefined') {
        setStatus('err', translations[state.lang].errLoad);
        return;
    }

    const text = elements.inputText.value.trim() || 'TEXT';
    const font = state.activeFont;
    const align = state.activeAlign;

    setStatus('loading');
    elements.statusFont.textContent = font;

    try {
        await ensureFontLoaded(font);
    } catch (error) {
        if (!isStale()) {
            setStatus('err', error.message);
        }
        return;
    }

    if (isStale()) {
        return;
    }

    let result;
    try {
        result = await figlet.text(text, font);
    } catch {
        result = null;
    }

    if (isStale()) {
        return;
    }

    if (!result) {
        setStatus('err', translations[state.lang].errGen);
        return;
    }

    renderOutput(result, align);
    setStatus('ok');
    scheduleStatusReset();
}

async function copyCode() {
    const value = elements.outputCode.value;
    if (!value) {
        return;
    }

    try {
        if (!navigator.clipboard) {
            throw new Error('Clipboard API is unavailable');
        }
        await navigator.clipboard.writeText(value);
    } catch {
        // Clipboard access is blocked (e.g. insecure context or permission denied):
        // select the text so the user can copy it manually.
        elements.outputCode.focus();
        elements.outputCode.select();
        return;
    }

    elements.copyBtn.classList.add('copied');
    elements.copyBtnText.textContent = translations[state.lang].copied;

    window.clearTimeout(state.copyTimerId);
    state.copyTimerId = window.setTimeout(() => {
        elements.copyBtn.classList.remove('copied');
        elements.copyBtnText.textContent = translations[state.lang].copyBtn;
    }, COPY_RESET_MS);
}

function handleInputChange() {
    window.clearTimeout(state.debounceId);
    state.debounceId = window.setTimeout(generateArt, DEBOUNCE_MS);
}

function cacheElements() {
    elements.langToggleBtn = document.getElementById('langToggleBtn');
    elements.langMenu = document.getElementById('langMenu');
    elements.langBtnText = document.getElementById('langBtnText');
    elements.labelConfig = document.getElementById('label-config');
    elements.labelText = document.getElementById('label-text');
    elements.labelAlign = document.getElementById('label-align');
    elements.labelFonts = document.getElementById('label-fonts');
    elements.labelStats = document.getElementById('label-stats');
    elements.labelUsage = document.getElementById('label-usage');
    elements.generateText = document.getElementById('btn-generate-text');
    elements.tabCodeLabel = document.getElementById('tab-code-label');
    elements.tabPreviewLabel = document.getElementById('tab-preview-label');
    elements.optLeft = document.getElementById('opt-left');
    elements.optCenter = document.getElementById('opt-center');
    elements.optRight = document.getElementById('opt-right');
    elements.statLabelLines = document.getElementById('stat-label-lines');
    elements.statLabelChars = document.getElementById('stat-label-chars');
    elements.usageText = document.getElementById('usage-text');
    elements.footerText = document.getElementById('footer-text');
    elements.copyBtn = document.getElementById('copyBtn');
    elements.copyBtnText = document.getElementById('copy-btn-text');
    elements.inputText = document.getElementById('inputText');
    elements.outputCode = document.getElementById('outputCode');
    elements.previewArea = document.getElementById('previewArea');
    elements.lineNums = document.getElementById('lineNums');
    elements.lineCount = document.getElementById('lineCount');
    elements.statusDot = document.getElementById('statusDot');
    elements.statusMsg = document.getElementById('statusMsg');
    elements.statusFont = document.getElementById('statusFont');
    elements.statLines = document.getElementById('stat-lines');
    elements.statChars = document.getElementById('stat-chars');
    elements.fontList = document.getElementById('fontList');
    elements.tabItems = Array.from(document.querySelectorAll('.tab-item'));
    elements.tabPanes = Array.from(document.querySelectorAll('.tab-pane'));
    elements.alignButtons = Array.from(document.querySelectorAll('.align-btn'));
    elements.languageButtons = [];
    elements.fontItems = [];
}

function bindEvents() {
    elements.langToggleBtn.addEventListener('click', toggleLangMenu);
    elements.languageButtons.forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    document.addEventListener('click', (event) => {
        if (!(event.target instanceof Element) || !event.target.closest('.lang-switcher')) {
            closeLangMenu();
        }
    });

    elements.alignButtons.forEach((button) => {
        button.addEventListener('click', () => setAlignment(button.dataset.align));
    });

    elements.tabItems.forEach((button) => {
        button.addEventListener('click', () => switchTab(button.dataset.tab));
    });

    elements.copyBtn.addEventListener('click', copyCode);
    document.getElementById('generateBtn').addEventListener('click', generateArt);
    elements.inputText.addEventListener('input', handleInputChange);
    elements.fontList.addEventListener('click', (event) => {
        const trigger = event.target.closest('[data-font]');
        if (trigger) {
            setFont(trigger.dataset.font);
        }
    });
}

function init() {
    cacheElements();
    renderLanguageMenu();
    renderFontList();
    bindEvents();
    setLanguage('en');
    generateArt();
}

// The script is a deferred module, but guard against running after DOMContentLoaded.
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
    init();
}
