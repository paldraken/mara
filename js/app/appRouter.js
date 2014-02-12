define([
    'marionette',
    'app/app'
], function(Marionette, App) {

    var appController = Marionette.Controller.extend({
        doHome: function() {
            require(['app/Modules/MainPage/MainPage'], function(MainPage) {
                console.log('home');
                App.contentRegion.show(new MainPage());
            });
        },
        doUsers: function() {
            console.log('users');
        },
        doList: function() {
            console.log('list');
        }
    });

    return Marionette.AppRouter.extend({
        controller: new appController(),
        appRoutes: {
            '': 'doHome',
            'users': 'doUsers',
            'list': 'doList'
        },
        initialize: function() {
        }
    });

});