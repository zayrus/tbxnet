import { client } from './';

const url = '/items';

export function fetchItems(){
  return dispatch => {
    dispatch({
      type: 'FETCH_ITEMS',
      payload: client.get(url)
    })
  }
}

export function newItem() {
  return dispatch => {
    dispatch({
      type: 'NEW_ITEM'
    })
  }
}

export function saveItem(item) {
  item.price = Math.floor(item.price);
  item.quantity = Math.floor(item.quantity);
  return dispatch => {
    return dispatch({
      type: 'SAVE_ITEM',
      payload: client.post(url, item)
    })
  }
}

export function fetchItem(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_ITEM',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function deleteItem(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_ITEM',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}
