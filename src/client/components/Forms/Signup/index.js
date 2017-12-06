import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Info from './Info'
import Confirmation from './Confirmation'

class SignupForm extends Component {
    state = {
        page: 1
    }

    nextPage = () => {
        this.setState({page: this.state.page++})
    }

    previousPage = () => {
        this.setState({page: this.state.page--})
    }

    render() {
        let {onSubmit} = this.props;
        let {page} = this.state;
        return(
            <div>
                {page === 1 ? <Info onSubmit={this.nextPage}/> :
                    <Confirmation onSubmit={onSubmit} previosPage={this.previousPage}/>}
            </div>
        )
    }
}

SignupForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default SignupForm;