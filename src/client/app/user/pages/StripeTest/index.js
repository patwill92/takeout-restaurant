import React, {Component} from 'react'
import {StripeProvider, Elements} from 'react-stripe-elements'
import {Button} from 'semantic-ui-react'
import axios from 'axios'
import FormWrapper from '../../components/FormWrapper'
import Container from '../../../components/Container'

import CheckoutForm from './StripeElements'

class StripeTest extends Component {
    state = {
        doc: false
    };

    componentDidMount = () => {
        this.setState({doc: true})
    }
    render() {
        return this.state.doc && (
            <FormWrapper>
                <Container style={{padding: '40px 35px', backgroundColor: '#fff'}}>
                    <StripeProvider apiKey="pk_test_sZyegBXFfU0cg7xrh4VG34rB">
                        <Elements>
                            <CheckoutForm />
                        </Elements>
                    </StripeProvider>
                </Container>
            </FormWrapper>
        )
    }
}

export default {
    component: StripeTest
}

