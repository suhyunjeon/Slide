/*global backboneTEST, $*/


window.app = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';
        
        var model = new app.Models.UserModel();

        model.on("request", function(model, xhr, options){
            console.log("### REQUEST from app's model\n", model, xhr, options);
        });

        model.on("sync", function(model, response, options){

            console.log("### SYNC from app's model\n", model, response, options);

        });
        model.fetch();
        console.log("--- main application init --- ");
    }
};

$(document).ready(function () {
    'use strict';
    app.init();
});