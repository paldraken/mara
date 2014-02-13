define([
    'app/Modules/Users/index'
], function(Module) {
    return {
        self: Module,
        doList: function() {
            console.log('controller do List', this.self);
        }
    }
});