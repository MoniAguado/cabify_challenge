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
      inputValue: [0, 0, 0],
  
    }
    
  }

  componentDidMount() {
    getData().then(data => {
      this.setState({
        dataList: data,
      });
    });
  }

  handleInput = (event) => {
    console.log('quiero mi numerito ' + this.state.inputValue)
    this.setState({
      inputValue: event.target.value
      
    });
    
  }

  removeProduct = (item) => {
    let newInputValue = this.state.inputValue
    if(this.state.inputValue[item] > 0) {
      newInputValue[item] --
      this.setState({
        inputValue: newInputValue 
      })
    }
    console.log('esto resta ' + this.state.inputValue)
  
  }

  addProduct = (item) => {
    let newInputValue = this.state.inputValue
    newInputValue[item] ++
    console.log('esto suma', this.state.inputValue)
    this.setState({
      inputValue: newInputValue
    })
  }

  handleSubmit = (event) => {
    console.log('el numerico se ha guardado: ' + this.state.inputValue);
    event.preventDefault();
    this.setState({
      inputValue: this.state.inputValue
    })
  }




  render() {

    console.log('Lista', this.state.dataList)
    console.log('El numerico guardado: ' + this.state.inputValue)
    const { dataList, inputValue, showModal } = this.state


    return (
      <div className="root">
        <div className="main_app">
          <ProductsList 
            dataList={dataList}
            inputValue={inputValue}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
            removeProduct={this.removeProduct}
            addProduct={this.addProduct}


          />
          <Summary 
            dataList={dataList}
            inputValue={inputValue}
          
          />

          
        </div>
      </div>
    );
  }

}


export default App;
