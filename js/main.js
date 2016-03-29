var $ = require('jquery');
var WinLosses = require('./collections/collections_data');
var WinLoss = require('./models/model_data');
var CasinoTemplate = require('../templates/gambling.html');

$(document).ready(function() {

    var $form = $("#statementForm");

    $form.on('submit', function(e) {
        e.preventDefault();

        var winloss = new WinLoss();

        winloss.set({
            'casino': $("#casino").val(),
            'day': $("#day").val(),
            'time': $("#time").val(),
            'played': $("#played").val(),
            'win': $("#win").val()
        });

        winloss.save();
    });


    WinLosses.fetch({
    	success: function (collection) {
    		var data = {casinos:collection.toJSON()}
    		$("#app").html(CasinoTemplate(data));		
    	}
    })


    
});
