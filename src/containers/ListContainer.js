import React from 'react';
import { connect } from 'react-redux';

import List from '../components/List';
import { deleteTodo, toggleTodo, editTodo } from '../actions';

function getFilteredTodos(todos, filter) {
  switch (filter) {
    case 'ALL':
      return todos;

    case 'COMPLETED':
      return todos.filter(todo => todo.completed);

    case 'UNCOMPLETED':
      return todos.filter(todo => !todo.completed);
  }
}

function mapStateToProps(state) {
  return {
    todos: getFilteredTodos(state.todos, state.filter),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onDelete: id => dispatch(deleteTodo(id)),
    onToggle: id => dispatch(toggleTodo(id)),
    onEdit: (id, title) => dispatch(editTodo(id, title)),
  };
}

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(List);

export default ListContainer;
