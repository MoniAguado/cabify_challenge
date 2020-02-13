import React, { Component } from 'react';
import Item from './components/Item';
import PropTypes from 'prop-types';

class ProductsList extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h2>Products List</h2>
                <Item />
            </div>
        )
    }
}

export default ProductsList;
