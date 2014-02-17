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
            moduleMenu: '.module-menu',
            listRegion: '#users-list',
            detailRegion: '.users-detail'
        },
        initialize: function() {
            console.log('init user page');
        },
        onRender: function() {
            this.router = Router(this.controller, 'users', this);
        },
        controller: {
            doList: function() {
                var Dummy = Marionette.ItemView.extend({
                    template: _.template('<div>!!!!!!!!!!!!!</div>')
                });
                this.listRegion.show(new Dummy());
            },
            doIndex: function() {
                console.log('users home');
                this.listRegion.show(new UsersColl());
            }
        }
    });
});