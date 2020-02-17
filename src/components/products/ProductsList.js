import React, { Component } from 'react';
import Item from './components/Item';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    

    render() {

        return (
            <div className="products_list">
                <h1 className="title">Shopping Cart</h1>
                <ul className="table_head">
                    <li className="products-list_title row">
                        <div className="col-product">Product details</div>
                        <div className="col-quantity">Quantity</div>
                        <div className="col-price">Price</div>
                        <div className="col-total">Total</div>
                    </li>
                </ul>
                <Item
                    dataList={this.props.dataList}
                    inputValue={this.props.inputValue}
                    handleInput={this.props.handleInput}
                    handleSubmit={this.props.handleSubmit}
                    addProduct={this.props.addProduct}
                    removeProduct={this.props.removeProduct}/>
            </div>
        )
    }
}

export default ProductsList;
