import React from 'react';

import Stats from './stats';
import Stopwatch from './stopwatch';

function Header(props) {
  const todos = props.store.getState();

  return (
    <header>
      <Stats todos={todos} />
      <h1>Redux Todo</h1>
      <Stopwatch />
    </header>
  );
}

Header.propTypes = {
  todos: React.PropTypes.array.isRequired,
};

export default Header;
