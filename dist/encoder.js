"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encoder = void 0;
const alphabet_1 = require("./alphabet");
class Encoder {
    HEX_SYMBOLS = "0123456789abcdef";
    validateHex = (hex) => hex.split("").every((item) => this.HEX_SYMBOLS.includes(item));
    validateText = (text) => text
        .split("")
        .every((item) => Object.values(alphabet_1.ALPHABET).join("").slice(0, 256).includes(item));
    splitHexIntoPairs = (hex) => {
        if (hex.length % 2 !== 0) {
            throw new Error("Строка должна состоять из bytes в hex формате с ведущими нулями!");
        }
        return hex.match(/.{1,2}/g) || [];
    };
    bytesToHex = (bytes) => bytes.reduce((acc, value) => {
        acc += alphabet_1.MAPPED_ALPHABET.BYTES_TO_HEX?.get(value) || "";
        return acc;
    }, "");
    hexToBytes = (hex) => {
        if (hex.length % 2 !== 0) {
            throw new Error("Длина строки должна быть четной");
        }
        if (!this.validateHex(hex)) {
            throw new Error("Строка должна содержать только hex символы");
        }
        const pairsString = this.splitHexIntoPairs(hex);
        const bytes = new Uint8Array(pairsString.length);
        for (let i = 0; i <= bytes.length; i++) {
            bytes[i] = alphabet_1.MAPPED_ALPHABET.HEX_TO_BYTES?.get(pairsString[i]) || 0;
        }
        return bytes;
    };
    bytesToText = (bytes) => bytes.reduce((acc, value) => {
        acc += alphabet_1.MAPPED_ALPHABET.BYTES_TO_TEXT?.get(value) || "";
        return acc;
    }, "");
    textToBytes = (text) => {
        if (!this.validateText(text)) {
            throw new Error("Присутствуют недопустимые символы!");
        }
        const bytes = new Uint8Array(text.length);
        for (let i = 0; i <= bytes.length; i++) {
            bytes[i] = alphabet_1.MAPPED_ALPHABET.TEXT_TO_BYTES?.get(text[i]) || 0;
        }
        return bytes;
    };
}
exports.Encoder = Encoder;
//# sourceMappingURL=encoder.js.map