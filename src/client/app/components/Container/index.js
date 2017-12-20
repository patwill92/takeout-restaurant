import React, {Component} from 'react'
import withStyles from 'react-jss'

const padding = {
    boxSizing: 'border-box !important',
    paddingLeft: 15,
    paddingRight: 15,
    marginLeft: 'auto',
    marginRight: 'auto'
}

let styles = theme => ({
    '@media (min-width: 1200px)': {
        root: {
            width: 1140,
            maxWidth: '100% !important',
            ...padding
        },
    },
    '@media (min-width: 992px) and (max-width: 1199px)': {
        root: {
            width: 960,
            maxWidth: '100% !important',
            ...padding
        }
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        root: {
            width: 720,
            maxWidth: '100% !important',
            ...padding
        }
    },
    '@media (max-width: 767px)': {
        root: {
            width: 540,
            maxWidth: '100% !important',
            ...padding
        }
    },
});

const Container = ({classes, children, style}) => {
    return (
        <div id='containerID' className={classes.root} style={style ? style : {}}>
            {children}
        </div>
    )
}

export default withStyles(styles)(Container);