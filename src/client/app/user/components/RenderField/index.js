import React from 'react'
import {Form} from 'semantic-ui-react'
import withStyles from 'react-jss'

import Icon from '../../../components/Icon/index'

const styles = {
    root: {
        paddingLeft: 38 + ' !important'
    },
    inputContainer: {
        position: 'relative'
    }
};

const RenderField = ({classes, input, label, type, meta, icon}) => {
    let iconSize = 15;
    let {touched, error, active} = meta;
    let iconColor = () => {
        if(!!(touched && error)) {
            return '#9f3a38'
        }
        if(active) {
            return 'rgba(0,0,0,.7)'
        }
        else {
            return 'rgba(0,0,0,.5)'
        }

    };
    return (
        <Form.Field error={!!(touched && error)}>
            <label style={{fontWeight: 400, textTransform: 'uppercase'}}>{label}</label>
            <div className={classes.inputContainer}>
                <input className={classes.root} {...input} placeholder={label} type={type} />
                <div  style={{position: 'absolute', top: 38/4, left: 12}}>
                    <Icon color={iconColor()} name={icon} loose size={iconSize} />
                </div>
            </div>
        </Form.Field>
    );
};

export default withStyles(styles)(RenderField)
