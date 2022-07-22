import { APIErrorResponse } from './model/APIErrorResponse';
export declare module Controllers.Core {
    /**
     * Core controller which defines common logic between controllers.
     *
     * Workflow details:
     * - First, the "_handleRequest" method must be called. It ensures common stuff happens, and bind some data into the option object.
     * - It calls a magic method such as "__beforeIndex" if the request was coming from an "index" method.
     * - If it doesn't find any specific magic method to call, it calls directly the "__beforeEach" method.
     * - If it does find a custom magic method, then the "__beforeIndex" will automatically call the "__beforeEach" once it is done.
     * - Once all the "__before" magic methods have been called, the caller's callback function is called.
     *
     * The options object contains specific stuff that belongs to the controllers logic, I could have use the req but I prefer not.
     *
     * The public methods such as index/show/etc. are defined but send by default a 404 response if they are not overridden in the child class.
     * They exists just to bind by default all these methods without take care if they exists or not in order to speed up development.
     */
    class Controller {
        /**
         * Overrides for the settings in `config/controllers.js`
         * (specific to the controller where it's defined)
         * Specific to sails. Don't rename.
         */
        protected _config: any;
        /**
         * Exported methods. Must be overridden by the child to add custom methods.
         */
        protected _exportedMethods: string[];
        /**
         * Theme used by the controller by default.
         * Could be overridden by the user theme. (One day, when the feature will be done...)
         */
        protected _theme: string;
        /**
         * Layout used by the controller by default.
         */
        protected _layout: string;
        /**
         * Relative path to a layout from a view.
         */
        protected _layoutRelativePath: string;
        /**
         * Default exported methods.
         * These methods will be accessible.
         */
        private _defaultExportedMethods;
        /**
         **************************************************************************************************
         **************************************** Public methods ******************************************
         **************************************************************************************************
         */
        /**
         * Returns an object that contains all exported methods of the controller.
         * These methods must be defined in either the "_defaultExportedMethods" or "_exportedMethods" arrays.
         *
         * @returns {*}
         */
        exports(): any;
        /**
         **************************************************************************************************
         **************************************** Protected methods ******************************************
         **************************************************************************************************
         */
        /**
         * Acts as a requests workflow handler to automatically call magic methods such as "__before".
         * Used to call magic methods before the targeted methods is called.
         * Bind some data as well, like the current controller and action name.
         *
         * @param req       Request.
         * @param res       Response.
         * @param callback  Function to execute.
         * @param options   Object that contains options.
         *          controller  Controller      Child controller class. (static)
         *
         */
        protected _handleRequest(req: any, res: any, callback: any, options?: any): void;
        /**
         **************************************************************************************************
         **************************************** Controller basic methods ********************************
         **************************************************************************************************
         */
        /**
         * Displays the global content, displays several resources.
         * This method is just to return a 404 error and explain the role.
         *
         * @param req       Request.
         * @param res       Response.
         * @param callback  Function to execute.
         * @param options   Object that contains options.
         */
        index(req: any, res: any, callback: any, options?: any): void;
        _getResolvedView(branding: string, portal: string, view: string): string;
        _getResolvedLayout(branding: string, portal: string): string;
        sendView(req: any, res: any, view: string, locals?: any): void;
        respond(req: any, res: any, ajaxCb: any, normalCb: any, forceAjax?: boolean): any;
        protected isAjax(req: any): boolean;
        protected ajaxOk(req: any, res: any, msg?: string, data?: any, forceAjax?: boolean): void;
        protected ajaxFail(req: any, res: any, msg?: string, data?: any, forceAjax?: boolean): void;
        protected apiFail(req: any, res: any, statusCode?: number, errorResponse?: APIErrorResponse): any;
        protected apiRespond(req: any, res: any, jsonObj?: any, statusCode?: number): void;
        protected ajaxRespond(req: any, res: any, jsonObj: any, forceAjax: any): void;
        protected getNg2Apps(viewPath: any): {
            ng2_apps: any;
        };
    }
}
