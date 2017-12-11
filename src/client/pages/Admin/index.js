import React, {Component, Fragment} from 'react'
import {withRouter} from 'react-router-dom'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import AddItemForm from './AddItemForm'
import ConfirmationForm from './AddItemConfirm'
import {addMenuItem} from "../../actions/menu-actions";

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
    };

    setHeight = (height) => {
        this.setState({height})
    };

    setSelect = (select) => {
        this.setState({select})
    };

    uploadMenuItem = async (item) => {
        let formData = new FormData();
        item = {...item, image: item.image[0]};
        for(const name in item) {
            formData.append(name, item[name])
        }
        this.props.addMenuItem(formData, this.props.history);
    }

    render() {
        let {classes, form} = this.props;
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
                {!this.state.form &&
                <ConfirmationForm
                    formContent={this.props.form}
                    height={this.state.height}
                    blob={this.state.blob}
                    onSubmit={() => this.uploadMenuItem(form.values)}
                    onBack={() => this.setState({form: true})}/>}
            </Fragment>
        )
    }
}

const mapStateToProps = ({form}) => {
    return {
        form: form.addItem
    }
};

export default {
    component: connect(mapStateToProps, {addMenuItem})(withRouter(withStyles(styles)(Admin)))
}