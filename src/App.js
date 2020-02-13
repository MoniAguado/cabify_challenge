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
      <div className="root">
        <div className="main_app">
          <ProductsList />
          <Summary />
        </div>
      </div>
    );
  }

}


export default App;
