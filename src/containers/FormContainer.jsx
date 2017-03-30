import React from 'react';

import Form from '../components/Form';
import { addTodo } from '../actions';

class FormContainer extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.store = this.context.store;

    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd(title) {
    this.store.dispatch(addTodo(title));
  }

  render() {
    return (
      <Form onAdd={this.handleAdd} />
    );
  }

}

FormContainer.contextTypes = {
  store: React.PropTypes.object,
};

export default FormContainer;
