(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@abp/ng.core')) :
    typeof define === 'function' && define.amd ? define('@orendaco/of/config', ['exports', '@angular/core', '@abp/ng.core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.orendaco = global.orendaco || {}, global.orendaco.of = global.orendaco.of || {}, global.orendaco.of.config = {}), global.ng.core, global.ng_core));
}(this, (function (exports, core, ng_core) { 'use strict';

    var OF_ROUTE_PROVIDERS = [
        {
            provide: core.APP_INITIALIZER,
            useFactory: configureRoutes,
            deps: [ng_core.RoutesService],
            multi: true,
        },
    ];
    function configureRoutes(routesService) {
        return function () {
            routesService.add([
                {
                    path: '/of',
                    name: "Of" /* Of */,
                    iconClass: 'fas fa-book',
                    layout: "application" /* application */,
                    order: 3,
                },
            ]);
        };
    }

    var OfConfigModule = /** @class */ (function () {
        function OfConfigModule() {
        }
        OfConfigModule.forRoot = function () {
            return {
                ngModule: OfConfigModule,
                providers: [OF_ROUTE_PROVIDERS],
            };
        };
        return OfConfigModule;
    }());
    OfConfigModule.decorators = [
        { type: core.NgModule }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.OF_ROUTE_PROVIDERS = OF_ROUTE_PROVIDERS;
    exports.OfConfigModule = OfConfigModule;
    exports.configureRoutes = configureRoutes;
    exports.ɵa = OF_ROUTE_PROVIDERS;
    exports.ɵb = configureRoutes;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=orendaco-of-config.umd.js.map
