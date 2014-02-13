define([
    'jquery',
    'underscore',
    'marionette',
    'app/Modules/Users/router',
    'app/Modules/Users/Views/UsersListCollection',
    'text!app/Modules/Users/tpl/layout.html'
], function($, _, Marionette, Router, UsersColl, tpl) {
    return Marionette.Layout.extend({
        template: _.template(tpl),
        regions: {
            listRegion: '#users-list',
            detailRegion: '.users-detail'
        },
        initialize: function() {
            console.log('init user page');
            this.router = Router(this.controller, 'users/', this);
        },
        controller: {
            doList: function() {
                console.log(this.listRegion);
                this.listRegion.show(new UsersColl());

            }
        }
    });
});