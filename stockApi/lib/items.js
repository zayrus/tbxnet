'use strict'

let ItemsModel = require('../api/models/item').Item

function Items(main) {
  this.db = main.db
}

Items.prototype.add = function(obj) {
  let addItem= new ItemsModel(obj)
  let promise = addItem.save()
    
  return promise
}

Items.prototype.list = function(obj) {
  let query = ItemsModel.find({}, {__v: 0})
  
  return query
}

Items.prototype.delete = function(id) {
  let promise = ItemsModel.remove({_id: id})
  return promise
  
}

module.exports = Items