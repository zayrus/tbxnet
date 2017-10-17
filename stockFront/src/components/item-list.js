import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ProductCard from './product-card';

export default function ItemList({items, loading, errors, deleteItem}){
  const loadingMessage = (
      <Message icon info>
        <Icon name='circle notched' loading />
        <Message.Content>
           <Message.Header>Aguarde unos instantes</Message.Header>
           Se estan buscando productos en stock
       </Message.Content>
      </Message>
    )

    const emptyMessage = (
      <Message icon info>
        <Icon name='warning circle' />
        <Message.Content>
           <Message.Header>No hay productos en stock</Message.Header>
           <p></p>
           <Link to={'/items/new'} className="ui button primary">Agregar producto</Link>
       </Message.Content>
      </Message>
    )

    const timeoutMessage = (
      <Message icon negative>
        <Icon name='wait' />
        <Message.Content>
           <Message.Header>{errors.global}</Message.Header>
           revisar el servidor
       </Message.Content>
      </Message>
    )

  const cards = () => {
    return items.map(item => {
      return (
        <ProductCard key={item._id} item={item} deleteItem={deleteItem} />
      )
    })
  }

  const itemList = (
    <Card.Group>
      { cards() }
    </Card.Group>
  )

  return (
    <div>
      { loading && loadingMessage }
      { items.length === 0 && !loading  && !errors.global && emptyMessage }
      { errors.global && timeoutMessage }
      { items.length > 0 && itemList }
    </div>
  )
}
