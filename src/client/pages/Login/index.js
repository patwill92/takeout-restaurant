import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import axios from 'axios'

import SignupForm from '../components/Forms/LoginForm'
import {getUser} from "../../actions/auth-actions"
import Icon from '../../components/Icon'

let icon = {

};

const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex'
    },
    icon: {
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

class SignUp extends Component {
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
        switch(num) {
            case 0: return this.setState({stars: '#39ff2b'});
            case 1: return this.setState({stars: '#991312'});
            case 2: return this.setState({stars: '#2b14dd'});
            case 3: return this.setState({stars: '#de12b7'});
            case 4: return this.setState({stars: '#de8918'});
        }
    }

    render() {
        let {classes} = this.props;

        return (
            <div>
                <SignupForm onSubmit={() => this.signUp(this.props.form.values)}/>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    maxWidth: 400,
                    marginTop: 50,
                    marginLeft: 'auto',
                    marginRight: 'auto'
                }}>
                    <div className={classes.iconParent}>
                        {
                            Array(5).fill().map((name, i) => {
                                return (
                                    <div onMouseOver={() => this.mouseOver(i)} key={i} className={classes.icon} style={{display: 'inline-block'}}>
                                        <Icon color={!isNaN(this.state.number) && i <= this.state.number ? this.state.stars: '#333'} name='star'/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form: form.login
    }
};

export default {
    component: connect(mapStateToProps, null)(withRouter(withStyles(styles)(SignUp)))
}

