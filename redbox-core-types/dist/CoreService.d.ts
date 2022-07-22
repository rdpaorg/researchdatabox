import { Observable } from 'rxjs/Rx';
export declare module Services.Core {
    class Service {
        /**
         * Exported methods. Must be overridden by the child to add custom methods.
         */
        protected _exportedMethods: string[];
        /**
         * Default exported methods.
         * These methods will be accessible.
         */
        private _defaultExportedMethods;
        protected logHeader: string;
        /**
        * Returns an RxJS Observable wrapped nice and tidy for your subscribing pleasure
        */
        protected getObservable(q: any, method?: string, type?: string): Observable<any>;
        /**
        * Wrapper for straightforward query, no chaining..
        */
        protected exec(q: any, successFn: any, errorFn: any): void;
        /**
         * Returns an object that contains all exported methods of the controller.
         * These methods must be defined in either the "_defaultExportedMethods" or "_exportedMethods" arrays.
         *
         * @returns {*}
         */
        exports(): any;
        /**
         * returns a string that is 'true' or 'false' (literal) depending on whether the 'options.triggerCondition' is met!
         *
         * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
         * @param  oid
         * @param  record
         * @param  options
         * @return
         */
        protected metTriggerCondition(oid: any, record: any, options: any): string;
        protected sleep(ms: any): Promise<unknown>;
    }
}
