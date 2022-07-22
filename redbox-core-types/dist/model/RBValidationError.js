"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RBValidationError = void 0;
class RBValidationError extends Error {
    constructor(args) {
        super(args);
        this.name = 'RBValidationError';
    }
}
exports.RBValidationError = RBValidationError;
