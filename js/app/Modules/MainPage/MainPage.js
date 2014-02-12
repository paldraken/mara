define([
    'jquery',
    'underscore',
    'marionette',
    'text!app/Modules/MainPage/tpl/layout.html'
], function($, _, Marionette, tpl) {
    return Marionette.Layout.extend({
        template: _.template(tpl),
        regions: {
            listRegion: '.mp-list',
            detailRegion: '.mp-detail'
        },
        initialize: function() {

        }
    });
});