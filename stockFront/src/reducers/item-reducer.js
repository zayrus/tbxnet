const defaultState = {
  items: [],
  item: {name:{}},
  loading: false,
  errors:{}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_ITEMS_FULFILLED': {
      return {
        ...state,
        items: action.payload.data,
        loading: false,
        errors: {}
      }
    }

    case 'FETCH_ITEMS_PENDING': {
      return {
        ...state,
        loading: true,
        errors: {}
      }
    }

    case 'FETCH_ITEMS_REJECTED': {
      return {
        ...state,
        loading: false,
        errors: { global: action.payload.message }
      }
    }

    case 'NEW_ITEM': {
      return {
        ...state,
        item: {name:{}}
      }
    }

    case 'SAVE_ITEM_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_ITEM_FULFILLED': {
      return {
        ...state,
        items: [...state.items, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_ITEM_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { "name":itemname} = data.errors;
      const errors = { global: data.message, name: { itemname}};
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }

    case 'FETCH_ITEM_PENDING': {
      return {
        ...state,
        loading: true,
        item: {name:{}}
      }
    }

    case 'FETCH_ITEM_FULFILLED': {
      return {
        ...state,
        item: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'DELETE_ITEM_FULFILLED': {
      const _id = action.payload.data._id;
      return {
        ...state,
        items: state.items.filter(item => item._id !== _id)
      }
    }

    default:
      return state;
  }
}
