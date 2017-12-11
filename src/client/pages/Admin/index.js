import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import AddItemForm from './AddItemForm'
import ConfirmationForm from './AddItemConfirm'

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
        form: true,
        blob: '',
        height: '',
        select: ''
    };

    setBlob = (blob) => {
        this.setState({blob})
    };

    goToConfirmation = () => {
        this.setState({form: false})
    }

    setHeight = (height) => {
        this.setState({height})
    }

    setSelect = (select) => {
        this.setState({select})
    }

    render() {
        let {classes} = this.props;
        return (
            <Fragment>
                {this.state.form &&
                <AddItemForm
                    blob={this.state.blob}
                    setBlob={this.setBlob}
                    setSelect={this.setSelect}
                    select={this.state.select}
                    height={this.state.height}
                    setHeight={this.setHeight}
                    onSubmit={this.goToConfirmation} />}
                {!this.state.form && <ConfirmationForm height={this.state.height} onSubmit={() => alert('submitted')} onBack={() => this.setState({form: true})}/>}
            </Fragment>
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