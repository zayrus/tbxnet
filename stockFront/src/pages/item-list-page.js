import React, { Component} from 'react';
import { connect } from 'react-redux';
import ItemList from '../components/item-list';
import { fetchItems, deleteItem } from '../actions/item-actions';

class ItemListPage extends Component {

  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    return (
      <div>
        <h1>Lista de Productos</h1>
        <ItemList items={this.props.items} loading={this.props.loading} errors={this.props.errors} deleteItem={this.props.deleteItem}/>
      </div>
    )
  }
}

// Make items  array available in  props
function mapStateToProps(state) {
  return {
      items : state.itemStore.items,
      loading: state.itemStore.loading,
      errors: state.itemStore.errors
  }
}

export default connect(mapStateToProps, {fetchItems, deleteItem})(ItemListPage);
