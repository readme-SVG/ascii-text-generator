import en from './en.js';
import zh from './zh.js';
import es from './es.js';
import fr from './fr.js';
import pt from './pt.js';
import ru from './ru.js';
import ja from './ja.js';
import de from './de.js';
import uk from './uk.js';
import pl from './pl.js';
import nl from './nl.js';
import kk from './kk.js';
import sv from './sv.js';
import cs from './cs.js';

const translationEntries = [
    ['en', en],
    ['zh', zh],
    ['es', es],
    ['fr', fr],
    ['pt', pt],
    ['ru', ru],
    ['ja', ja],
    ['de', de],
    ['uk', uk],
    ['pl', pl],
    ['nl', nl],
    ['kk', kk],
    ['sv', sv],
    ['cs', cs]
];

function validateTranslations(entries) {
    const expectedKeys = Object.keys(entries[0][1]).sort();

    entries.forEach(([languageCode, translation]) => {
        const actualKeys = Object.keys(translation).sort();

        if (expectedKeys.length !== actualKeys.length || expectedKeys.some((key, index) => key !== actualKeys[index])) {
            throw new Error(`Translation keys are out of sync for "${languageCode}".`);
        }
    });
}

validateTranslations(translationEntries);

export const translations = Object.freeze(Object.fromEntries(translationEntries));
export const supportedLanguages = Object.freeze(translationEntries.map(([languageCode]) => languageCode));
export const copiedLabels = Object.freeze(translationEntries.map(([, translation]) => translation.copied));
