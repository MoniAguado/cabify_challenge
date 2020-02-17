import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Summary extends Component {
    constructor(props) {
        super(props)
        
      }


    renderTotalPrices = () => {
        let totalPrice = 0
        console.log('this.props' + this.props)
        this.props.dataList.map((item, index) => {totalPrice += item.price * this.props.inputValue[index]})
        return <span className="summary-items-price">{totalPrice}</span>

    }
   
    render() {
        return (
            <div className="summary">
                <h1 className="title">Order Summary</h1>
                <div className="summary_items">
                    <div>
                        <span className="summary_items_number">{this.props.inputValue.reduce((accumulator, item) => accumulator + item, 0)}
                            <span className="summary_products_items">Items</span>
                        </span>
                    </div>
                    <div className="summary_total_price">
                        <span className="summary-items-price">{this.renderTotalPrices()}
                            <span className="price_currency">€</span>
                        </span>
                    </div>
                </div>
                <div className="summary_discounts">
                    <h2 className="discounts_title">Discounts</h2>
                    <ul className="discounts_list">
                        <li className="discount_type">
                            <span>2x1 Mug offer</span>
                            <span className="discount_number">-10€</span></li>
                        <li className="discount_type">
                            <span>x3 Shirt offer</span>
                            <span className="discount_number">-3€</span></li>
                        <li className="discount_type">
                            <span>Promo code</span>
                            <span className="discount_number">0€</span></li>
                    </ul>
                </div>
                <div className="summary_total">
                    <div className="summary_total_cost">
                        <span class="summary_total_text">{this.renderTotalPrices()}</span>
                        <span class="summary_total_price">107€</span>
                    </div>
                    <button type="submit" className="summary_button">Checkout</button>
                </div>
            </div>
        )
    }
}

export default Summary;
