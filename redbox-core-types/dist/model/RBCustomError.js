"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBCustomError = void 0;
class RBCustomError extends Error {
    constructor(args) {
        super(args);
        this.name = 'RBCustomError';
    }
}
exports.RBCustomError = RBCustomError;
