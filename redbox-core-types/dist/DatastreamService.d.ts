import DatastreamServiceResponse from './DatastreamServiceResponse';
import Datastream from './Datastream';
export interface DatastreamService {
    addDatastreams(oid: string, datastreams: Datastream[]): Promise<DatastreamServiceResponse>;
    updateDatastream(oid: string, record: any, newMetadata: any, fileRoot: any, fileIdsAdded: any): any;
    removeDatastream(oid: any, datastream: Datastream): any;
    addDatastream(oid: any, datastream: Datastream): any;
    addAndRemoveDatastreams(oid: any, addDatastreams: Datastream[], removeDatastreams: Datastream[]): any;
    getDatastream(oid: any, fileId: any): any;
    listDatastreams(oid: any, fileId: any): any;
}
