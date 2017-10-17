'use strict'

function items(main){
  return {
    add: (req, res, next) => {
      console.log('addd body ', req.body)
      const promise = new Promise ( (resolve) => {
        const item = main.libs.Items.add(req.body)
        resolve(item)
      })
      .then( item => {
        return res.json(item)
      })
      .catch( err => {
        next(err)
      })
    },
    list: ( req, res, next) => {
      main.libs.Items.list(req.body)
      .then( items => {
        return res.json(items)
      })
      .catch( err => {
        next(err)
      })
    },
    remove: (req, res, next) => {
      const id = req.swagger.params.id.value
      
      const promise = new Promise ( (resolve) => { 
        const removeItem = main.libs.Items.delete(id)
        resolve(removeItem)
      })
      .then( () => {
        return res.json({msg: 'item deleted'})
      })
      .catch( err => {
        next(err)
      })
    
    }
  }
}

module.exports = items
