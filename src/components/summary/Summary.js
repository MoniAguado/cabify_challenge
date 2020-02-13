import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Summary extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h2>Summary</h2>
            </div>
        )
    }
}

export default Summary;
