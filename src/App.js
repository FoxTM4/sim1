import React, { Component } from 'react';

import './App.css';
import Form from './components/Form/Form'
import Dashboard from './components/Dashboard/Dashboard'
import Header from './components/Header/Header'


class App extends Component {
  constructor(){
    super();
    this.state= {
      nameInput: '',
      imgInput: '',
      products: [
        {name: 'Coat', price: 12, img: 'image.com'},
      {name: 'hat', price: 5, img:'image2.com'},
      {name: 'shoe', price: 60, img:'image3.com'}
    ],
      priceInput: null,

      
    }

    this.handleNameInput=this.handleNameInput.bind(this)
    this.handleImgInput=this.handleImgInput.bind(this)
    this.createInput=this.createInput.bind(this)
    this.handlePriceInput=this.handlePriceInput.bind(this)


  }
  handleNameInput(e){
    this.setState({nameInput: e.target.value})
  }

  handleImgInput(e){
    this.setState({imgInput: e.target.value})
  }

  createInput(){
    const {nameInput, imgInput, priceInput}= this.state;
    const newProduct = {name: nameInput, image: imgInput, price: priceInput}
    this.setState({product: [...this.state.product, newProduct]})
  }
  handlePriceInput(e){
    this.setState({priceInput: e.target.value})
  }

  handleCancel(){
    this.setState({})
  }

  render() {
    return (
      <div className="App">
       <Dashboard products={this.state.products}/>
       <Header/>
       <Form />
      </div>
    );
  }
}

export default App;
