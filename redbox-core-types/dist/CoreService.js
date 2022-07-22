"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Services = void 0;
const Rx_1 = require("rxjs/Rx");
// changed to a manual lodash load instead of relying on Sails global object
// this enables testing of installable hooks that rely on services at load-time (i.e. index.js)
const _ = require("lodash");
var Services;
(function (Services) {
    var Core;
    (function (Core) {
        class Service {
            constructor() {
                /**
                 * Exported methods. Must be overridden by the child to add custom methods.
                 */
                this._exportedMethods = [];
                /**
                 * Default exported methods.
                 * These methods will be accessible.
                 */
                this._defaultExportedMethods = [
                    // Sails controller custom config.
                    '_config',
                ];
            }
            /**
            * Returns an RxJS Observable wrapped nice and tidy for your subscribing pleasure
            */
            getObservable(q, method = 'exec', type = 'node') {
                if (type == 'node')
                    return Rx_1.Observable.bindNodeCallback(q[method].bind(q))();
                else
                    return Rx_1.Observable.bindCallback(q[method].bind(q))();
            }
            /**
            * Wrapper for straightforward query, no chaining..
            */
            exec(q, successFn, errorFn) {
                this.getObservable(q).subscribe(successFn, errorFn);
            }
            /**
             * Returns an object that contains all exported methods of the controller.
             * These methods must be defined in either the "_defaultExportedMethods" or "_exportedMethods" arrays.
             *
             * @returns {*}
             */
            exports() {
                // Merge default array and custom array from child.
                var methods = this._defaultExportedMethods.concat(this._exportedMethods);
                var exportedMethods = {};
                for (var i = 0; i < methods.length; i++) {
                    // Check if the method exists.
                    if (typeof this[methods[i]] !== 'undefined') {
                        // Check that the method shouldn't be private. (Exception for _config, which is a sails config)
                        if (methods[i][0] !== '_' || methods[i] === '_config') {
                            if (_.isFunction(this[methods[i]])) {
                                exportedMethods[methods[i]] = this[methods[i]].bind(this);
                            }
                            else {
                                exportedMethods[methods[i]] = this[methods[i]];
                            }
                        }
                        else {
                            console.error('The method "' + methods[i] + '" is not public and cannot be exported. ' + this);
                        }
                    }
                    else {
                        console.error('The method "' + methods[i] + '" does not exist on the controller ' + this);
                    }
                }
                return exportedMethods;
            }
            /**
             * returns a string that is 'true' or 'false' (literal) depending on whether the 'options.triggerCondition' is met!
             *
             * @author <a target='_' href='https://github.com/shilob'>Shilo Banihit</a>
             * @param  oid
             * @param  record
             * @param  options
             * @return
             */
            metTriggerCondition(oid, record, options) {
                const triggerCondition = _.get(options, "triggerCondition", "");
                const forceRun = _.get(options, "forceRun", false);
                const variables = {
                    imports: {
                        record: record,
                        oid: oid
                    }
                };
                if (!_.isUndefined(triggerCondition) && !_.isEmpty(triggerCondition)) {
                    const compiled = _.template(triggerCondition, variables);
                    return compiled();
                }
                else if (forceRun) {
                    return "true";
                }
                else {
                    // if trigger condition is not set, fail fast!
                    return "false";
                }
            }
            sleep(ms) {
                return new Promise(resolve => {
                    setTimeout(resolve, ms);
                });
            }
        }
        Core.Service = Service;
    })(Core = Services.Core || (Services.Core = {}));
})(Services = exports.Services || (exports.Services = {}));
