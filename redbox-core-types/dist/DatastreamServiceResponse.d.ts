/**
 * Base class for a datastream service response
 *
 */
export declare class DatastreamServiceResponse {
    success: boolean;
    message: string;
    constructor();
    isSuccessful(): boolean;
}
export default DatastreamServiceResponse;
