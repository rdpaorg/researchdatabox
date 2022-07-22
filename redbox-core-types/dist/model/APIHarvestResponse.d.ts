export declare class APIHarvestResponse {
    harvestId: string;
    oid: string;
    message: string;
    details: string;
    status: boolean;
    constructor(harvestId: string, oid: string, status?: boolean, message?: string, details?: string);
}
