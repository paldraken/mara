define([
    'backbone.subroute',
    'app/Modules/Users/controller'
], function(SubRoute, Controller) {

    return function(api, baseRoute, parent) {


        var subRoute = SubRoute.extend({
            routes: {
                'list': function(params) {
                    api['doList'].apply(parent, params);
                },
                "": function(params) {
                    console.log(1111111111112);
                    api['doIndex'].apply(parent, params);
                }
            }
        });

        return new subRoute(baseRoute, {createTrailingSlashRoutes: true});
    }

});