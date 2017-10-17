var mongoose  = require('mongoose')
var Schema    = mongoose.Schema

var ItemsSchema = new Schema({
  writeDate: {
    type: Date,
    default: Date.now
  },
  name: String,
  quantity: Number,
  price: Number
})

const ItemModel = mongoose.model('Item', ItemsSchema)

module.exports.Item = ItemModel