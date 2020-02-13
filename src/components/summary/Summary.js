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
            </div>
        )
    }
}

export default Summary;
