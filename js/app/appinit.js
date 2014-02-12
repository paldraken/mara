define([
    'app/app',
    'app/layouts/main_layout',
    'app/Modules/MainMenu/MainMenu',
    'app/appRouter'
], function(App, MainLayout, MainMenu, AppRouter) {

    return function() {
        App.addRegions({
            mainMenuRegion: "#mara-main-menu",
            contentRegion: "#mara-content"
        });

        App.addInitializer(function(options) {

            this.mainRouter = new AppRouter();
            this.mainMenuRegion.show(new MainMenu());
        });

        App.on("initialize:after", function(options){
            if (Backbone.history){
                Backbone.history.start();
            }
        });
    }

});