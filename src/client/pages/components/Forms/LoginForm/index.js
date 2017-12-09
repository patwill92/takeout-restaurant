import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Info from './Info/index'

class SignupForm extends Component {
    render() {
        let {onSubmit} = this.props;
        return <Info onSubmit={onSubmit}/>
    }
}

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SignupForm