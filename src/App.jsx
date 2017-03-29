import React from 'react';

import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.store = this.props.store;

  }

  componentDidMount() {
    this.unsubscribe = this.store.subscribe(() => this.forceUpdate());
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const todos = this.store.getState();

    return (
      <main>
        <Header store={this.store} />

        <List store={this.store} />

        <Form store={this.store} />
      </main>
    );
  }
}

App.propTypes = {
  initialData: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      title: React.PropTypes.string.isRequired,
      completed: React.PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

export default App;
