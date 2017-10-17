import React, { Component } from 'react';
import { Form, Grid, Button } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import classnames from 'classnames';


class ItemForm extends Component {

  componentWillReceiveProps = (nextProps) => { // Load Item Asynchronously
    const { item } = nextProps;
    if(item._id !== this.props.item._id) { // Initialize form only once
      this.props.initialize(item)
    }
  }

  renderField = ({ input, label, type, meta: { touched, error } }) => (
    <Form.Field className={classnames({error:touched && error})}>
      <label>{label}</label>
      <input {...input} placeholder={label} type={type}/>
      {touched && error && <span className="error">{error.message}</span>}
    </Form.Field>
  )

  render() {
    const { handleSubmit, pristine, submitting, loading} = this.props;
    return (
      <Grid centered columns={2 }>
        <Grid.Column>
          <h1 style={{marginTop:"1em"}}>{'Agregar producto'}</h1>
          <Form onSubmit={handleSubmit} loading={loading}>
            <Form.Group widths='equal'>
              <Field name="name" type="text" component={this.renderField} label="Nombre"/>
            </Form.Group>
            <Field name="quantity" type="number" component={this.renderField} label="Cantidad"/>
            <Field name="price" type="number" component={this.renderField} label="Precio"/>
            <Button primary type='submit' disabled={pristine || submitting}>Guardar</Button>
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

export default reduxForm({form: 'item'})(ItemForm);
