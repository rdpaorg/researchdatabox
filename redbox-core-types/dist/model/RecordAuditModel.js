"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordAuditModel = void 0;
class RecordAuditModel {
    constructor(oid, record, user) {
        if (user != null && !_.isEmpty(user.password)) {
            delete user.password;
        }
        this.redboxOid = oid;
        this.record = record;
        this.user = user;
    }
}
exports.RecordAuditModel = RecordAuditModel;
