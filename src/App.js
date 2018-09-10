import React, { Component } from 'react';
import Body from './components/Body';
import Header from './components/Header';



class App extends Component {
  render() {
    return (
      <div className="cajaContenedora">
      <Header title='South Park'/>
      <Body/>
       
      </div>
    );
  }
}

export default App;
