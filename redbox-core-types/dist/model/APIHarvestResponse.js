"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APIHarvestResponse = void 0;
class APIHarvestResponse {
    constructor(harvestId, oid, status = true, message = 'Harvested successfully', details = '') {
        this.harvestId = harvestId;
        this.message = message;
        this.details = details;
        this.oid = oid;
        this.status = status;
    }
}
exports.APIHarvestResponse = APIHarvestResponse;
