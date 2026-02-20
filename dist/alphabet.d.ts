type T_ALPABET = Readonly<{
    digits: string;
    enSmall: string;
    enBig: string;
    ruSmall: string;
    ruBig: string;
    specChars: string;
    sugarChars: string;
}>;
declare const ALPHABET: T_ALPABET;
type T_MAPPED_ALPHABET = Partial<{
    BYTES_TO_HEX: Map<number, string>;
    HEX_TO_BYTES: Map<string, number>;
    TEXT_TO_BYTES: Map<string, number>;
    BYTES_TO_TEXT: Map<number, string>;
}>;
declare const MAPPED_ALPHABET: T_MAPPED_ALPHABET;
export { ALPHABET, MAPPED_ALPHABET };
//# sourceMappingURL=alphabet.d.ts.map