import React from 'react'
import withStyles from 'react-jss'

const columnFlex = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
}

const styles = theme => ({
    root: {
        position: 'relative',
        borderRadius: 4,
        boxShadow: theme.shadows[10] + ' !important'
    },
    image: {
        height: 'auto',
        width: '100%',
        borderRadius: 4
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: '100%',
        minHeight: '100%',
        position: 'absolute',
        top: 0,
        ...columnFlex,
        borderRadius: 4
    },
    button: {
        backgroundColor: 'rgba(0,0,0,0)',
        width: '80% !important',
        minHeight: '80%',
        position: 'absolute',
        top: '10%',
        left: '10%',
        ...columnFlex,
        marginBottom: 0,
        borderWidth: '1px',
        borderStyle: 'dashed',
        borderColor: 'rgba(255, 255, 255, 0.6)',
        borderRadius: 4,
        color: '#fff',
        fontWeight: 300,
        fontSize: '24px',
        textTransform: 'uppercase',
        transition: 'border-color 0.5s' ,
        '&:hover': {
            borderWidth: '1.5px',
            borderStyle: 'solid',
            borderColor: 'rgba(255, 255, 255, 1.0)',
            cursor: 'pointer'
        }
    }
});

const ButtonCard = ({classes, src, content}) => {
    return (
        <div className={classes.root}>
            <img className={classes.image} src={src} alt=""/>
            <div className={classes.overlay}/>
            <div className={classes.button}>
                {content}
            </div>
        </div>
    )
}

export default withStyles(styles)(ButtonCard)