export declare class Encoder {
    private readonly HEX_SYMBOLS;
    validateHex: (hex: string) => boolean;
    validateText: (text: string) => boolean;
    private splitHexIntoPairs;
    bytesToHex: (bytes: Uint8Array) => string;
    hexToBytes: (hex: string) => Uint8Array;
    bytesToText: (bytes: Uint8Array) => string;
    textToBytes: (text: string) => Uint8Array;
}
//# sourceMappingURL=encoder.d.ts.map