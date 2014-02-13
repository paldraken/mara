define([
    'marionette',
    'app/app'
], function(Marionette, App) {

    var appController = Marionette.Controller.extend({
        doHome: function() {
            console.log('home')
            require(['app/Modules/MainPage/index'], function(MainPage) {
                App.contentRegion.show(new MainPage());
            });
        },
        doUsers: function() {
            console.log('users');
            require(['app/Modules/Users/index'], function(Users) {
                App.contentRegion.show(new Users());
            });
        },
        doList: function() {
            console.log('list');
        }
    });

    return Marionette.AppRouter.extend({
        controller: new appController(),
        appRoutes: {
            '': 'doHome',
            'home': 'doHome',
            'users(/*subroute)': 'doUsers',
            'list': 'doList'
        },
        initialize: function() {
        }
    });

});