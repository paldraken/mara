define([
    'jquery',
    'underscore',
    'marionette',
    'backbone',
    'text!app/Modules/Users/Views/UsersListCollection.html'
], function($, _, Marionette, Backbone, tpl) {

    var homeCollection = Backbone.Collection.extend({
        url: '/api/users/',
        models: Backbone.Model.extend(),
        initialize: function() {
            this.comparator = this._orderNameAsc;
        },
        _orderNameAsc: function(a, b) {
            a = a.get('name'); b = b.get('name');
            return a.localeCompare(b);
        },
        _orderNameDesc: function(a, b) {
            a = a.get('name'); b = b.get('name');
            return a.localeCompare(b) * -1;
        },
        orderByNameAsc: function() {
            this.comparator = this._orderNameAsc;
            this.sort();
        },
        orderByNameDesc: function() {
            this.comparator = this._orderNameDesc;
            this.sort();
        }
    });


    return Marionette.CompositeView.extend({
        initialize: function() {
            this.collection.fetch();
        },
        events: {
            'click .sort-asc': 'doAsc',
            'click .sort-desc': 'doDesc',
            'click .users-add': 'doAdd'
        },

        doAdd: function() {
            var user = $('.new-user-field', this.$el).val().trim();
            if(user) {
                this.collection.create({name: user})
            }
        },

        doAsc: function() {
            this.collection.orderByNameAsc();
            this.render();
        },

        doDesc: function() {
            this.collection.orderByNameDesc();
            this.render();
        },
        template: _.template(tpl),

        itemViewContainer: '.user_list-container',

        collection: new homeCollection(),

        itemView: Marionette.ItemView.extend({
            tagName: 'tr',
            events: {
                'click .remove': 'doRemove'
            },
            doRemove: function() {
                this.model.destroy();
            },
            template: _.template('<td><%= name %> <a href="javascript:void(0);" class="remove">X</a></td>')
        })
    });

});