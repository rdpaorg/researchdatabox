/**
 * Response class for StorageService methods.
 */
export declare class StorageServiceResponse {
    success: boolean;
    oid: string;
    message: string;
    metadata: any;
    totalItems: number;
    items: any[];
    constructor();
    isSuccessful(): boolean;
}
export default StorageServiceResponse;
