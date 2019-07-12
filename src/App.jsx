import React from 'react';
import { connect } from 'react-redux';
import './styles/App.scss';
import CharacterList from './containers/CharacterList.jsx';

const App = () => (
  <div className="App">
    <header className="App-header">
      <CharacterList />
      
    </header>
  </div>
);

export default connect()(App);
