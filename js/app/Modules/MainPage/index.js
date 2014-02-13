define([
    'jquery',
    'underscore',
    'marionette',
    'app/Modules/MainPage/router',
    'text!app/Modules/MainPage/tpl/layout.html'
], function($, _, Marionette, Router, tpl) {
    return Marionette.Layout.extend({
        template: _.template(tpl),
        regions: {
            listRegion: '.mp-list',
            detailRegion: '.mp-detail'
        },
        initialize: function() {
            console.log('init mainPage');
            this.router = new Router('users/', {createTrailingSlashRoutes: true});
        }
    });
});