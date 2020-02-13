import React, { Component } from 'react';
import Item from './components/Item';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    
  constructor(props) {
    super(props)
    
  }

    render() {

        return (
            <div className="products_list">
                <h1 className="title">Shopping Cart</h1>
                <ul class="table_head">
                    <li class="products-list_title row">
                    <div class="col-product">Product details</div>
                    <div class="col-quantity">Quantity</div>
                    <div class="col-price">Price</div>
                    <div class="col-total">Total</div>
                    </li>
                </ul>
                <Item productsList={this.props.productsList}/>
            </div>
        )
    }
}

export default ProductsList;
