const translations = {
    en: {
        langButton: 'English',
        labelConfig: 'Configuration',
        labelText: 'Text Input',
        labelAlign: 'Alignment',
        labelFonts: 'Fonts',
        labelStats: 'Stats',
        labelUsage: 'Usage',
        btnGenerate: 'Generate ASCII Art',
        tabCode: 'Code',
        tabPreview: 'Preview',
        copyBtn: 'Copy',
        copied: 'Copied!',
        optLeft: 'Left',
        optCenter: 'Center',
        optRight: 'Right',
        statLines: 'Lines',
        statChars: 'Characters',
        statusReady: 'Ready',
        statusLoading: 'Generating...',
        statusOk: 'Done',
        errLoad: 'Figlet library failed to load.',
        errFont: 'Failed to load font file.',
        errGen: 'Rendering error',
        linesSuffix: 'lines',
        usageText: 'Copy the generated code and paste it into your README.md. The <pre> tag inside a div ensures correct rendering on GitHub.',
        footerText: 'If this tool saved you time — a ⭐ means a lot!'
    },
    ru: {
        langButton: 'Русский',
        labelConfig: 'Настройки',
        labelText: 'Текст',
        labelAlign: 'Выравнивание',
        labelFonts: 'Шрифты',
        labelStats: 'Статистика',
        labelUsage: 'Использование',
        btnGenerate: 'Сгенерировать',
        tabCode: 'Код',
        tabPreview: 'Просмотр',
        copyBtn: 'Копировать',
        copied: 'Скопировано!',
        optLeft: 'Слева',
        optCenter: 'По центру',
        optRight: 'Справа',
        statLines: 'Строки',
        statChars: 'Символы',
        statusReady: 'Готов',
        statusLoading: 'Генерация...',
        statusOk: 'Готово',
        errLoad: 'Не удалось загрузить Figlet.',
        errFont: 'Ошибка загрузки шрифта.',
        errGen: 'Ошибка рендеринга',
        linesSuffix: 'строк',
        usageText: 'Скопируйте код и вставьте его в README.md. Тег <pre> внутри div обеспечивает корректное отображение на GitHub.',
        footerText: 'Если инструмент сэкономил тебе время — ⭐ очень важна!'
    }
};

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

const state = {
    lang: 'en',
    activeFont: 'ANSI Shadow',
    activeAlign: 'center',
    debounceId: null,
    loadedFonts: new Set()
};

const elements = {};

function getFontItemId(fontId) {
    return `fitem-${fontId.replace(/ /g, '_').replace(/[^a-zA-Z0-9_-]/g, '')}`;
}

function escapeAttribute(value) {
    return value.replace(/'/g, '&#39;');
}

function getUsageMarkup(text) {
    return text
        .replace('README.md', '<code class="inline-code">README.md</code>')
        .replace('<pre>', '<code class="inline-code">&lt;pre&gt;</code>')
        .replace('div', '<code class="inline-code">div</code>');
}

function getFooterMarkup(text) {
    return text.replace('⭐', '<a href="https://github.com/readme-SVG/ascii-text-generator">⭐</a>');
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

function updateLineNumbers(text) {
    const lineCount = (text.match(/\n/g) || []).length + 1;
    elements.lineNums.textContent = Array.from({ length: lineCount }, (_, index) => index + 1).join('\n');
    elements.lineCount.textContent = `${lineCount} ${translations[state.lang].linesSuffix}`;
    elements.statLines.textContent = String(lineCount);
    elements.statChars.textContent = String(text.length);
}

function renderFontList() {
    elements.fontList.innerHTML = fonts.map((font) => {
        const isActive = font.id === state.activeFont ? ' active' : '';
        return `
            <button class="font-item${isActive}" id="${getFontItemId(font.id)}" type="button" data-font="${escapeAttribute(font.id)}">
                <span class="font-dot"></span>
                <span class="font-name">${font.id}</span>
                <span class="font-hint">${font.hint}</span>
            </button>
        `;
    }).join('');
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

function setLanguage(language) {
    state.lang = language;
    const copy = translations[language];

    closeLangMenu();
    elements.langBtnText.textContent = copy.langButton;
    elements.checkEn.classList.toggle('hidden', language !== 'en');
    elements.checkRu.classList.toggle('hidden', language !== 'ru');

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

    if (![translations.en.copied, translations.ru.copied].includes(elements.copyBtnText.textContent)) {
        elements.copyBtnText.textContent = copy.copyBtn;
    }

    setStatus('ready');
    updateLineNumbers(elements.outputCode.value || '');
}

function setFont(fontId) {
    state.activeFont = fontId;
    renderFontList();
    generateArt();
}

async function ensureFontLoaded(font) {
    if (state.loadedFonts.has(font)) {
        return;
    }

    const response = await fetch(`https://cdn.jsdelivr.net/npm/figlet@1.8.0/fonts/${encodeURIComponent(font)}.flf`);
    if (!response.ok) {
        throw new Error(translations[state.lang].errFont);
    }

    figlet.parseFont(font, await response.text());
    state.loadedFonts.add(font);
}

async function generateArt() {
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

        figlet.text(text, font, (error, result) => {
            if (error || !result) {
                setStatus('err', translations[state.lang].errGen);
                return;
            }

            const code = `<div align="${align}">\n\n<pre>\n${result}\n</pre>\n\n</div>`;
            elements.outputCode.value = code;
            updateLineNumbers(code);

            elements.previewArea.innerHTML = `<div class="preview-content" align="${align}"><pre>${result}</pre></div>`;

            setStatus('ok');
            window.setTimeout(() => setStatus('ready'), 2000);
        });
    } catch (error) {
        setStatus('err', error.message);
    }
}

function copyCode() {
    const value = elements.outputCode.value;
    if (!value) {
        return;
    }

    navigator.clipboard.writeText(value).then(() => {
        elements.copyBtn.classList.add('copied');
        elements.copyBtnText.textContent = translations[state.lang].copied;

        window.setTimeout(() => {
            elements.copyBtn.classList.remove('copied');
            elements.copyBtnText.textContent = translations[state.lang].copyBtn;
        }, 2000);
    });
}

function handleInputChange() {
    window.clearTimeout(state.debounceId);
    state.debounceId = window.setTimeout(generateArt, 600);
}

function cacheElements() {
    elements.langToggleBtn = document.getElementById('langToggleBtn');
    elements.langMenu = document.getElementById('langMenu');
    elements.langBtnText = document.getElementById('langBtnText');
    elements.checkEn = document.getElementById('check-en');
    elements.checkRu = document.getElementById('check-ru');
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
    elements.languageButtons = Array.from(document.querySelectorAll('[data-lang]'));
}

function bindEvents() {
    elements.langToggleBtn.addEventListener('click', toggleLangMenu);
    elements.languageButtons.forEach((button) => {
        button.addEventListener('click', () => setLanguage(button.dataset.lang));
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.lang-switcher')) {
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
    renderFontList();
    bindEvents();
    setLanguage('en');
    generateArt();
}

document.addEventListener('DOMContentLoaded', init);
