import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import ItemsListPage from './pages/item-list-page';
import ItemsAddPage from './pages/item-add-page';

class App extends Component {
  render() {
    return (
      <Container>
        <div className="ui two item menu">
          <NavLink className="item" activeClassName="active" exact to="/">Listado de productos</NavLink>
          <NavLink className="item" activeClassName="active" exact to="/items/new">Agregar producto</NavLink>
        </div>
        <Route exact path="/" component={ItemsListPage}/>
        <Route path="/items/new" component={ItemsAddPage}/>
      </Container>
    );
  }
}

export default App;
