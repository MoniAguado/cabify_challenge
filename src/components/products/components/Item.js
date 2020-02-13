import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Item extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h3>Item</h3>
            </div>
        )
    }
}

export default Item;