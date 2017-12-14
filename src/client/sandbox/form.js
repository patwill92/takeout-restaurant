import React, {Component} from 'react'
import {Field, reduxForm} from 'redux-form'
import {connect} from 'react-redux'

const MiniForm = props => {
    const {name} = props;
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            alert(name)
        }} style={{marginBottom: 10}}>
            <Field
                name={name}
                type="text"
                component='input'
                placeholder={name}
            />
        </form>
    )
};

function mapStateToProps(state, props) {
    return {
        form: props.name
    }
}


export default connect(mapStateToProps)(reduxForm({enableReinitialize: true, destroyOnUnmount: true})(MiniForm));