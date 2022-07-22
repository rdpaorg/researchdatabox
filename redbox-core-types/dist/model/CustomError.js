"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomError = void 0;
class CustomError extends Error {
    constructor(args) {
        super(args);
        this.name = "CustomError";
    }
}
exports.CustomError = CustomError;
