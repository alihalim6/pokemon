import { hot } from 'react-hot-loader';
import React from 'react';
import { getMonsters } from './api';
import './app.css';

class App extends React.Component {
  state = {
    monsters: [],
    loading: true,
  };

  async componentDidMount() {
    await getMonsters().then((monsters) => {
      this.setState({ monsters, loading: false });
    });
  }

  render() {
    const { loading, monsters } = this.state;

    return (
      <div className="app">
        {!loading
          ? monsters.map((monster) => {
            return <div>{monster.name}</div>;
          })
          : <span>Loading...</span>}
      </div>
    );
  }
}

export default hot(module)(App);
