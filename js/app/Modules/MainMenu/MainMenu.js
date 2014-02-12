define([
    'jquery',
    'underscore',
    'marionette',
    'app/app',
    'text!app/Modules/MainMenu/MainMenuTpl.html'
], function($, _, Marionette, App, tpl) {

    return Marionette.ItemView.extend({
        template: _.template(tpl)
    });
});
