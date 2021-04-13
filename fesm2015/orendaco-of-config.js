import { APP_INITIALIZER, NgModule } from '@angular/core';
import { RoutesService } from '@abp/ng.core';

const OF_ROUTE_PROVIDERS = [
    {
        provide: APP_INITIALIZER,
        useFactory: configureRoutes,
        deps: [RoutesService],
        multi: true,
    },
];
function configureRoutes(routesService) {
    return () => {
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

class OfConfigModule {
    static forRoot() {
        return {
            ngModule: OfConfigModule,
            providers: [OF_ROUTE_PROVIDERS],
        };
    }
}
OfConfigModule.decorators = [
    { type: NgModule }
];

/**
 * Generated bundle index. Do not edit.
 */

export { OF_ROUTE_PROVIDERS, OfConfigModule, configureRoutes, OF_ROUTE_PROVIDERS as ɵa, configureRoutes as ɵb };
//# sourceMappingURL=orendaco-of-config.js.map
