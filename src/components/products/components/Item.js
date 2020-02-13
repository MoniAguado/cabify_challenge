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
                    {this.props.productsList.map( item => ( 
                        <li className="item_product" >
                            <div className="item_description item">
                                <div className="product_image"><img src={item.image}/></div>
                                <div className="item_text">
                                    <div className="product_name">{item.name}</div>
                                    <div className="product_description">{item.description}</div>
                                </div>
                            </div>
                            <div className="item_quantity item">
                                <button className="button_minus button_quantity">-</button>
                                <input className="input_quantity"></input>
                                <button className="button_plus button_quantity">+</button>
                            </div>
                            <div className="item_price item">
                                <span className="price_number">{item.price}</span>
                                <span className="price_currency">€</span>
                            </div>
                            <div className="item_total item">
                                <span className="price_number">{item.price}</span>
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