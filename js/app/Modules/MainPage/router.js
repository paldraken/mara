define([
    'backbone.subroute'
], function(SubRoute) {

    return SubRoute.extend({
        routes: {
            'list': 'doList'
        },
        doList: function() {
            console.log('doList')
        }
    });
});