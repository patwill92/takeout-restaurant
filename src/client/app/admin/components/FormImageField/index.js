import React, {Fragment} from 'react'
import withStyles from 'react-jss'

import Icon from '../../../components/Icon/index'

const styles = theme => ({
    file: {
        border: `1px solid ${theme.palette.admin.green}`,
        borderRadius: 5,
        display: 'inline-block',
        padding: '6px 12px',
        cursor: 'pointer'
    },
})

const ImageField = props => {
    let {input, label, classes, loose, value, onChange} = props;
    return (
        <Fragment>
            {!loose ?
            <Fragment>
                <label>{'image'.toUpperCase()}</label>
                <div style={{marginBottom: 5}}/>
                <label className={classes.file}>
                    <input type='file' {...input} value={undefined} style={{display: 'none'}}/>
                    <span style={{fontSize: '1rem'}}>
                        <Icon color='#333' name='image' style={{
                            marginRight: 5,
                            top: 1
                        }}/> {input.value && input.value[0].name ? input.value[0].name : 'Upload'}
                        </span>
                </label>
                <div style={{marginBottom: 10}}/>
                {label && <img style={{width: 'auto', maxHeight: '180px'}} src={label} alt=""/>}
                <div style={{marginBottom: 5}}/>
            </Fragment> :
            <label className={classes.file}>
                <input onChange={onChange} type='file' value={undefined} style={{display: 'none'}}/>
                <span style={{fontSize: '1rem'}}>
                    <Icon color='#333' name='image' style={{
                        marginRight: 5,
                        top: 1
                    }}/> {value ? value : 'Upload'}
                    </span>
            </label>}
        </Fragment>
    )
};

export default withStyles(styles)(ImageField)