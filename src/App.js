import React, { Component}  from 'react';
import ProductsList from './components/products/ProductsList';
import Summary from './components/summary/Summary';
import './App.scss';

class App extends Component {

  constructor(props){
    super(props)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Cabify Challenge
        </header>
        <ProductsList />
        <Summary />
      </div>
    );
  }

}


export default App;
