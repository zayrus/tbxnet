import { combineReducers } from 'redux';
import ItemReducer from './item-reducer';
import { reducer as formReducer } from 'redux-form';

const reducers = {
  itemStore: ItemReducer,
  form: formReducer
}

const rootReducer = combineReducers(reducers);

export default rootReducer;
