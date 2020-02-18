import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    
    constructor(props) {
        super(props)
        
      }

    render() {
        return (
            <div className="items_info">
                 <ul className="items_list">
                    {this.props.dataList.map( (item, index) => ( 
                        <li className="item_product" >
                            <div className="item_description item">
                                
                                    <div className="product_image">
                                        <button className="button_detail"
                                            onClick={() => this.props.handleDetail(item)}>
                                            <img src={item.image} alt="Product Image"/>
                                        </button>
                                    </div>
                                    <div className="item_text">
                                        <div className="product_name">{item.name}</div>
                                        <div className="product_description">{item.description}</div>
                                    </div>
                                
                            </div>
                            <form
                                className="item_quantity item"
                                onSubmit={this.props.handleSubmit}>
                                <button
                                    className="button_minus button_quantity"
                                    onClick= {() => this.props.removeProduct(index)}>-
                                </button>
                                <input
                                    type="value"
                                   value={this.props.inputValue[index]} 
                                    className="input_quantity"
                                    placeholder="0"
                                    onChange={this.props.handleInput}
                                    onSubmit={this.props.handleSubmit}
                                    >
                                </input>
                                <button
                                    className="button_plus button_quantity"
                                    onClick={() => this.props.addProduct(index)}>+
                                </button>
                            </form>
                            <div className="item_price item">
                                <span className="price_number">{item.price}</span>
                                <span className="price_currency">€</span>
                            </div>
                            <div className="item_total item">
                                <span className="price_number">{this.props.inputValue[index] * item.price}</span>
                                <span className="price_currency">€</span>
                            </div>
                        </li>
                        )
                       
                    )}
                </ul>
            </div>
        )
    }
}

export default Item;