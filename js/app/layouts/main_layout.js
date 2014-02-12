define([
    'jquery',
    'underscore',
    'marionette',
    'backbone',
    'app/app',
    'text!app/layouts/tpl/main_layout_tpl.html'

], function($, _, Marionette, Backbone, App, tpl) {
    return Marionette.Layout.extend({
        template: _.template(tpl),
        regions: {
            menu: '.main-menu',
            content: '.content'
        },
        initialize: function() {

        }
    });
});