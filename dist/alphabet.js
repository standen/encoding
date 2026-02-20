"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAPPED_ALPHABET = exports.ALPHABET = void 0;
const ALPHABET_EN = "abcdefghijklmnopqrstuvwxyz";
const ALPHABET_RU = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя";
const ALPHABET = {
    digits: "0123456789",
    enSmall: ALPHABET_EN,
    enBig: ALPHABET_EN.toUpperCase(),
    ruSmall: ALPHABET_RU,
    ruBig: ALPHABET_RU.toUpperCase(),
    specChars: "~`'\"!@#№$;:,^%&?*()-+=|\\<>[]{}._ ",
    sugarChars: "ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûüýþÿĀāĂăĄąĆćĈĉĊċČčĎďĐđĒēĔĕĖėĘęĚěĜĝĞ",
};
exports.ALPHABET = ALPHABET;
const ALL_SYMBOLS = Object.values(ALPHABET).join("").slice(0, 256);
const MAPPED_ALPHABET = {};
exports.MAPPED_ALPHABET = MAPPED_ALPHABET;
MAPPED_ALPHABET.BYTES_TO_HEX = Array.from({ length: 256 }, (_, i) => i).reduce((acc, value) => {
    acc.set(value, value.toString(16).padStart(2, "0"));
    return acc;
}, new Map());
MAPPED_ALPHABET.HEX_TO_BYTES = Array.from({ length: 256 }, (_, i) => i).reduce((acc, value) => {
    acc.set(value.toString(16).padStart(2, "0"), value);
    return acc;
}, new Map());
MAPPED_ALPHABET.TEXT_TO_BYTES = ALL_SYMBOLS.split("").reduce((acc, value, index) => {
    acc.set(value, index);
    return acc;
}, new Map());
MAPPED_ALPHABET.BYTES_TO_TEXT = ALL_SYMBOLS.split("").reduce((acc, value, index) => {
    acc.set(index, value);
    return acc;
}, new Map());
//# sourceMappingURL=alphabet.js.map