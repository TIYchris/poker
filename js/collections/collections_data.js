var Backbone = require('../backbone-parse');
var WinLossModel = require('../models/model_data');
var WinLossesCollection = Backbone.Collection.extend({
  model: WinLossModel,
  _parse_class_name: 'WinLoss'
});

var WinLosses = new WinLossesCollection();

module.exports = WinLosses;
