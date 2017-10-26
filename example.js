
var AppView = Backbone.View.extend({
    el: '#container',

    template: _.template('<h3> Hello <%= firstname %> <%= lastname %> </h3>'),

    initialize: function() {
        this.render();
    },

    render: function() {
    	var context = {firstname: 'Alice', lastname: 'Anderson'};
        this.$el.html(this.template(context));
    },
});
var appView = new AppView();
       