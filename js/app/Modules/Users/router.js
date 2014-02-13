define([
    'backbone.subroute',
    'app/Modules/Users/controller'
], function(SubRoute, Controller) {

    return function(api, baseRoute, parent) {

//        var routes = {};
//        _.each(api, function(val, key) {
//            routes[key] = function(params) {
//                api[key].apply(parent, params);
//            }
//        });

        var subRoute = SubRoute.extend(_.defaults({
            routes: {
                'list': function(params) {
                    api['doList'].apply(parent, params);
                }
            }
        }));

        return new subRoute(baseRoute);
    }

});