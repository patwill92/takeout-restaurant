import React, {Component} from 'react'
import {
    CardElement,
    CardCVCElement,
    CardExpiryElement,
    CardNumberElement,
    PostalCodeElement,
    injectStripe,
} from 'react-stripe-elements';
import withStyles from 'react-jss'
import {Button, Form} from 'semantic-ui-react'
import axios from 'axios'

const styles = theme => ({
    form: {
        '& input': {
            padding: '6px 14px !important',
            borderRadius: 5,
            fontSize: '18px !important',
            color: '#333',
            '&::-webkit-input-placeholder': {
                color: '#dddddd !important',
            }
        },
        '& h3': {
            fontWeight: 400 + ' !important'
        },
        '& label': {
            textTransform: 'uppercase !important',
            fontWeight: 400 + ' !important',
            fontSize: '14px !important'
        },
        '& div': {
            marginBottom: 14 + ' !important',
        }
    },
    input: {
        padding: '6px 14px',
        border: '1px solid rgba(34,36,38,.15) !important',
        borderRadius: 5,
        fontSize: '18px',
        color: '#333',
        backgroundColor: '#fff',
        marginTop: 4 + ' !important',
    },
    btn: {
        backgroundColor: theme.palette.primary + ' !important',
        color: '#fff !important',
        boxShadow: theme.shadows[1] + ' !important',
        textTransform: 'uppercase !important',
        fontWeight: 400 + ' !important',
        backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/v1511822287/black-linen_vglyyw.png") !important',
        '&:hover': {
            color: '#fff !important',
            backgroundColor: theme.palette.primary + ' !important',
            boxShadow: theme.shadows[3] + ' !important',
        },
        '&:active': {
            color: '#fff !important',
            backgroundColor: theme.palette.primary + ' !important',
            boxShadow: theme.shadows[1] + ' !important',
        }
    }
});

class StripeElements extends Component {
    state = {
        name: '',
        address_line1: '',
        address_line2: '',
        address_city: '',
        address_state: ''
    }
    sendPaymentToken = async token => {
        const res = await axios.post('/payment', token);
        console.log(res.data);
    };

    handleChange = e => {
        let {name, value} = e.target;
        this.setState({[name]: value})
    };

    handleSubmit = (ev) => {
        ev.preventDefault();
        this.props.stripe.createToken({...this.state}).then(async (token) => {
            console.log('Received Stripe token:', token);
            const res = await axios.post('/payment', token);
            console.log(res.data);
        });
    };

    render() {
        const {classes} = this.props;
        return (
            <Form className={classes.form} onSubmit={this.handleSubmit} style={{width: '100%'}}>
                <h3>Billing Info</h3>
                <Form.Field >
                    <label>Address</label>
                    <input name={'address_line1'} value={this.state.address_line1} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>Apt/Suite number</label>
                    <input name={'address_line2'} value={this.state.address_line2} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>City</label>
                    <input name={'address_city'} value={this.state.address_city} onChange={this.handleChange}/>
                </Form.Field>
                <Form.Field>
                    <label>State</label>
                    <input name={'address_state'} value={this.state.address_state} style={{width: 55}} onChange={this.handleChange}/>
                </Form.Field>
                <label>Zip Code</label>
                <PostalCodeElement
                    className={classes.input}
                    style={{
                        base: {
                            fontSize: '18px',
                            "::placeholder": {
                                color: '#dddddd'
                            }
                        }
                    }}
                />
                <h3>Card Details</h3>
                <Form.Field>
                    <label>Name on Card</label>
                    <input name={'name'} value={this.state.name}  onChange={this.handleChange}/>
                </Form.Field>
                <label>Card Number</label>
                <CardNumberElement
                    className={classes.input}
                    style={{
                        base: {
                            fontSize: '18px',
                            "::placeholder": {
                                color: '#dddddd'
                            },
                        }
                    }}
                />
                <label>Exp. Date</label>
                <CardExpiryElement
                    className={classes.input}
                    style={{
                        base: {
                            fontSize: '18px',
                            "::placeholder": {
                                color: '#dddddd'
                            }
                        }
                    }}
                />
                <label>CVC Number</label>
                <CardCVCElement
                className={classes.input}
                style={{
                    base: {
                        fontSize: '18px',
                        "::placeholder": {
                            color: '#dddddd'
                        }
                    }
                }}
            />
                <Button className={classes.btn}>Place order</Button>
            </Form>
        );
    }
}

export default injectStripe(withStyles(styles)(StripeElements));

