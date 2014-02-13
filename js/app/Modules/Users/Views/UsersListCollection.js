define([
    'jquery',
    'underscore',
    'marionette',
    'backbone'
], function($, _, Marionette, Backbone) {

    return Marionette.ItemView.extend({
        template: '<h1>!!!!!!!!!!!</h1>'
    });

    return Marionette.CollectionView.extend({
        collection: Backbone.Collection.extend({ url: '/api/users'}),
        itemView: Marionette.ItemView.extend({
            template: _.template('<div><%= name %></div>>')
        })
    });

});