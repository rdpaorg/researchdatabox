import { StorageService } from "./StorageService";
export interface RecordsService extends StorageService {
    triggerPreSaveTriggers(oid: string, record: any, recordType: object, mode: string, user: any): Promise<any>;
    triggerPostSaveTriggers(oid: string, record: any, recordType: object, mode: string, user: any): void;
    triggerPostSaveSyncTriggers(oid: string, record: any, recordType: any, mode: string, user: object, response: any): any;
    hasEditAccess(brand: any, user: any, roles: any, record: any): boolean;
    hasViewAccess(brand: any, user: any, roles: any, record: any): boolean;
    appendToRecord(targetRecordOid: string, linkData: any, fieldName: string, fieldType: string, targetRecord: any): Promise<any>;
    updateWorkflowStep(currentRec: any, nextStep: any): void;
    getAttachments(oid: string, labelFilterStr?: string): Promise<any>;
    updateMeta(brand: any, oid: any, record: any, user?: any, triggerPreSaveTriggers?: any, triggerPostSaveTriggers?: any): Promise<any>;
    checkRedboxRunning(): Promise<any>;
}
