import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Summary extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="summary">
                <h1 className="title">Order Summary</h1>
                <div className="summary_items">
                    <div>
                        <span className="summary_items_number">11
                            <span className="summary_products_items">Items</span>
                        </span>
                    </div>
                    <div className="summary_total_price">
                        <span className="summary-items-price">120
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
                        <span class="summary_total_text">Total cost</span>
                        <span class="summary_total_price">107€</span>
                    </div>
                    <button type="submit" className="summary_button">Checkout</button>
                </div>
            </div>
        )
    }
}

export default Summary;
