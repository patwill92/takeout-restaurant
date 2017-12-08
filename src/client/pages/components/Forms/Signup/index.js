import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Info from './Info/index'
import Confirmation from './Confirmation/index'

class SignupForm extends Component {
    state = {
        page: 1
    };

    nextPage = () => {
        this.setState({page: this.state.page + 1})
    };

    previousPage = () => {
        this.setState({page: this.state.page - 1})
    };

    render() {
        let {onSubmit} = this.props;
        let {page} = this.state;
        let form = page === 1 ? <Info onSubmit={this.nextPage}/> :
            <Confirmation onSubmit={onSubmit} previousPage={this.previousPage}/>
        return form
    }
}

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};


export default SignupForm