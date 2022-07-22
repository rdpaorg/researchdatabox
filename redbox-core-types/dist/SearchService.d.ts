export interface SearchService {
    index(id: string, data: any): any;
    searchFuzzy(type: any, workflowState: any, searchQuery: any, exactSearches: any, facetSearches: any, brand: any, user: any, roles: any, returnFields: any, start?: number, rows?: number): Promise<any>;
    remove(id: string): any;
    searchAdvanced(query: any): Promise<any>;
}
