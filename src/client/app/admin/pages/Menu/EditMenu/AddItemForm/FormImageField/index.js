import React from 'react'

import Icon from '../../../../../../../components/Icon/index'

const ImageField = props => {
    let {input, label, classes} = props;
    return (
        <div>
            <label>{'image'.toUpperCase()}</label>
            <div style={{marginBottom: 5}} />
            <label className={classes.file}>
                <input type='file' {...input} value={undefined} style={{display: 'none'}}/>
                <Icon name='image' style={{marginRight: 5, top: 1}}/>
                <span style={{fontSize: '1rem'}}>{input.value && input.value[0].name ? input.value[0].name : 'Upload'}</span>
            </label>
            <div style={{marginBottom: 10}} />
            {label && <img style={{width: 'auto', maxHeight: '180px'}} src={label} alt="" />}
            <div style={{marginBottom: 5}} />
        </div>
    )
};

export default ImageField