require.config({
    baseUrl: '/js/',
    paths: {
        "jquery": 'vendor/jquery/jquery',
        "underscore": 'vendor/underscore/underscore',
        "backbone": 'vendor/backbone/backbone',
        "backbone.wreqr": 'vendor/backbone.wreqr/lib/backbone.wreqr',
        "backbone.babysitter": 'vendor/backbone.babysitter/lib/backbone.babysitter',
        "marionette": 'vendor/marionette/lib/backbone.marionette',
        "text": 'vendor/requirejs-text/text'
    },
    shim: {
        "jquery": {
            exports: '$'
        },
        "underscore": {
            exports: '_'
        },
        "backbone": {
            deps: ['jquery', 'underscore'],
            exports: 'Backbone'
        },
        "marionette": {
            deps: ['backbone', 'jquery', 'underscore'],
            exports: 'Marionette'
        }

    }
});

define([
    'app/app',
    'app/appinit'
], function(mainApp, appInit) {
    appInit();
    mainApp.start();

});