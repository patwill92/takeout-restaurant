import React, {Fragment} from 'react'
import withStyles from 'react-jss'
import {Form} from 'semantic-ui-react'

import Icon from '../../../../../../components/Icon/index'

const styles = {
    root: {
        paddingLeft: 38 + ' !important'
    },
    inputContainer: {
        position: 'relative'
    },
    text: {
        '& .text': {
            marginLeft: 20 + ' !important',
            pointerEvents: 'none !important',
            textTransform: 'capitalize'
        }
    },
    removeIcon: {
        '& .icon': {
            display: 'none !important'
        },
        height: 38,
        paddingLeft: 31 + ' !important',
        border: '1px solid rgba(34,36,38,.15)',
        borderRadius: '0.285714rem',
        '& select': {
            '&:hover': {
                cursor: 'pointer !important'
            },
            background: 'transparent !important',
            border: 'none !important',
            height: 38 + ' !important',
            '-webkit-appearance': 'none !important',
            '-moz-appearance': 'none !important',
            '&:focus': {
                borderColor: 'transparent !important',
                outline: 0 + ' !important'
            }
        }
    }
};

const RenderField = field => {
    let {classes, input, label, type, meta, icon, textArea, radio, cat, onSelectChange, value} = field;
    let iconSize = 15;
    let {touched, error, active} = meta;
    let iconColor = () => {
        if (!!(touched && error)) {
            return '#9f3a38'
        }
        if (active) {
            return 'rgba(0,0,0,.7)'
        }
        else {
            return 'rgba(0,0,0,.5)'
        }

    };
    let selectColor = () => {
        if (!!(touched && error)) {
            return '#e0b4b4'
        }
        if (active) {
            return 'rgba(0,0,0,.7)'
        }
        if (!!(touched && !error)) {
            return 'rgba(0,0,0,.7)'
        }
        else {
            return 'rgba(0,0,0,.5)'
        }

    };
    let options = [
        {text: 'Savory', value: 'Savory', name: 'category'},
        {text: 'Sweet', value: 'Sweet', name: 'category'}
    ];
    return (
        [
            <Form.Field style={{display: radio && 'inline-block'}} key={label} error={!!(touched && error)}>
                {!radio && <label style={{fontWeight: 400, textTransform: 'uppercase'}}>{label}</label>}
                <div className={classes.inputContainer}>
                    {!radio && !textArea && !cat &&
                    <input className={classes.root} {...input} placeholder={label} type={type}/>}
                    {
                        radio &&
                        <Fragment>
                            <input style={{marginTop: 10, marginBottom: 0}} type={type} {...input} />
                            <span style={{marginLeft: 10, marginRight: 10}}>{label.toUpperCase()}</span>
                        </Fragment>
                    }
                    {/*{radio && <input style={{marginTop: 10, marginBottom: 0}} type={type} {...input} />}*/}
                    {/*{radio && <span style={{marginLeft: 10, marginRight: 10}}>{label.toUpperCase()}</span>}*/}
                    {textArea && <textarea {...input} rows="3"/>}
                    {cat &&
                    <div
                        style={{
                            borderColor: !!(touched && error) && '#e0b4b4',
                            backgroundColor: !!(touched && error) && '#fff6f6'
                        }}
                        className={classes.removeIcon}>
                        <select style={{color: selectColor()}} {...input}>
                            <option value='' disabled>Category</option>
                            <option value='savory'>Savory</option>
                            <option value='sweet'>Sweet</option>
                        </select>
                    </div>}
                    {icon &&
                    <div style={{position: 'absolute', top: 38 / 4, left: 12, zIndex: 100}}>
                        <Icon color={iconColor()} name={icon} loose size={iconSize}/>
                    </div>}
                    {cat &&
                    <div style={{position: 'absolute', top: 10, right: 12, zIndex: 100}}>
                        <Icon style={{pointerEvents: 'none'}} color={iconColor()} name='angleDown' loose
                              size={iconSize}/>
                    </div>}
                </div>
            </Form.Field>,
            textArea && !radio &&
            <div key='radio'>
                <label style={{fontWeight: 400, textTransform: 'uppercase'}}>Available</label>
                <br/>
            </div>
        ]
    );
};

export default withStyles(styles)(RenderField)