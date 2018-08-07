import React, { Component } from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/main';
class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;
