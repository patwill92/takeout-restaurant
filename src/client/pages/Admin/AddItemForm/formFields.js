import React from 'react'
import withStyles from 'react-jss'
import {Form} from 'semantic-ui-react'

import Icon from '../../../components/Icon'

const styles = {
    root: {
        paddingLeft: 38 + ' !important'
    },
    inputContainer: {
        position: 'relative'
    }
};

const RenderField = ({classes, input, label, type, meta, icon, textArea, radio}) => {
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
        [
            <Form.Field style={{display: radio && 'inline-block'}} key={label} error={!!(touched && error)}>
                {!radio && <label style={{fontWeight: 400, textTransform: 'uppercase'}}>{label}</label>}
                <div className={classes.inputContainer}>
                    {!textArea && !radio && <input className={classes.root} {...input} placeholder={label} type={type} />}
                    {!textArea && radio && <input style={{marginTop: 10, marginBottom: 0}} key={'yes'} type={type} {...input} />}
                    {!textArea && radio && <span style={{marginLeft: 10, marginRight: 10}}>{label.toUpperCase()}</span>}
                    {textArea && !radio && <textarea {...input}  rows="3"/>}
                    {   !textArea && !radio &&
                    <div  style={{position: 'absolute', top: 38/4, left: 12}}>
                        <Icon color={iconColor()} name={icon} loose size={iconSize} />
                    </div>
                    }
                </div>
            </Form.Field>,
            textArea && !radio &&
            <div>
                <label key='radio' style={{fontWeight: 400, textTransform: 'uppercase'}}>Availability</label>
                <br/>
            </div>
        ]
    );
};

export default withStyles(styles)(RenderField)
