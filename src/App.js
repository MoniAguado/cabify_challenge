import React, { Component}  from 'react';
import getData from './api/Api';
import ProductsList from './components/products/ProductsList';
import Summary from './components/summary/Summary';
import './App.scss';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      dataList: [],
    }
    
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        dataList: data,
      });
    });
  }


  render() {

    console.log('Lista', this.state.dataList)
    const { dataList } = this.state


    return (
      <div className="root">
        <div className="main_app">
          <ProductsList 
          productsList={dataList}
          />
          <Summary />
        </div>
      </div>
    );
  }

}


export default App;
