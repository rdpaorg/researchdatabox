/// <reference types="node" />
import { Readable } from 'stream';
export interface StorageService {
    create(brand: any, record: any, recordType: any, user?: any): Promise<any>;
    updateMeta(brand: any, oid: any, record: any, user?: any): Promise<any>;
    getMeta(oid: any): Promise<any>;
    getAudit(oid: any): Promise<any>;
    createBatch(type: any, data: any, harvestIdFldName: any): Promise<any>;
    provideUserAccessAndRemovePendingAccess(oid: any, userid: any, pendingValue: any): void;
    getRelatedRecords(oid: any, brand: any): Promise<any>;
    delete(oid: any): Promise<any>;
    updateNotificationLog(oid: any, record: any, options: any): Promise<any>;
    getRecords(workflowState: any, recordType: any, start: any, rows: any, username: any, roles: any, brand: any, editAccessOnly: any, packageType: any, sort: any, fieldNames?: any, filterString?: any): Promise<any>;
    exportAllPlans(username: any, roles: any, brand: any, format: any, modBefore: any, modAfter: any, recType: any): Readable;
    createRecordAudit?(record: any): Promise<any>;
}
