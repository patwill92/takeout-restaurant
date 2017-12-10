import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import axios from 'axios'

import LoginForm from '../../components/Forms/LoginForm'
import {getUser} from "../../actions/auth-actions"
import Icon from '../../components/Icon'
import MiniForm from './form'
import AddItemForm from './AddItemForm'

let icon = {};

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex'
    },
    icon: {
        '&:hover': {
            cursor: 'pointer'
        }
    },
    formParent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
});

class Admin extends Component {
    state = {
        stars: '#333',
        number: ''
    };

    signUp = async (user) => {
        try {
            let {data} = await axios.post('/user/login', user);
            if (!data.errors) {
                return this.props.history.push('/');
            }
        } catch (e) {
            console.log(e.response.data);
        }
    };

    mouseOver = (num) => {
        this.setState({number: num});
        switch (num) {
            case 0:
                return this.setState({stars: '#39ff2b'});
            case 1:
                return this.setState({stars: '#991312'});
            case 2:
                return this.setState({stars: '#2b14dd'});
            case 3:
                return this.setState({stars: '#de12b7'});
            case 4:
                return this.setState({stars: '#de8918'});
        }
    }

    render() {
        let {classes} = this.props;

        return (
            <AddItemForm/>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form
    }
};

export default {
    component: connect(mapStateToProps, null)(withRouter(withStyles(styles)(Admin)))
}

