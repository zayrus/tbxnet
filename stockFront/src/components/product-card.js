import React from 'react';
import { Card, Button} from 'semantic-ui-react'

export default function ItemCard({item, deleteItem}) {
  return (
    <Card>
      <Card.Content>
        <Card.Header>
          {item.name}
        </Card.Header>
        <Card.Description>
          <p>Cantidad: {item.quantity}</p>
          <p>Precio: ${item.quantity}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="red" onClick={() => deleteItem(item._id)} >Borrar</Button>
        </div>
      </Card.Content>
    </Card>
  )
}

ItemCard.propTypes = {
  item: React.PropTypes.object.isRequired
}
