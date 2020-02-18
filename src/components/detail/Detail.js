import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Detail extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div className="detail_root"> Detail
            <div className="main_detail"></div>
                <div className="box_info_detail">
                    <div className="detail_flex">
                        <div className="detail_image"><img src={this.props.itemSelected.image} alt="Product Image"/></div>
                        <div className="detail_info">
                            <div className="detail_name">{this.props.itemSelected.name}</div>
                            <div className="detail_description">{this.props.itemSelected.description}</div>
                            <div className="detail_price">
                                <span className="summary_total_price">{this.props.itemSelected.price}</span>
                                <span className="summary_total_price">€</span>
                            </div>
                        </div>
                    </div>
                    <button
                        className="button_close"
                        onClick={this.props.handleCloseDetail}
                    >X</button>

                </div>
                
            </div>
        )
    }
}

export default Detail
