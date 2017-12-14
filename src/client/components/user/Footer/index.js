import React from 'react'
import withStyles from 'react-jss'

import Icon from '../../Icon/index'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)',
        backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/v1511822287/black-linen_vglyyw.png") !important',
        marginTop: 30,
        paddingTop: 50,
        paddingBottom: 50,
        '& div': {
            textAlign: 'center !important',
            color: 'rgba(255, 255, 255, 0.8)',
        }
    },
    social: {
        fontSize: '1.8rem',
        marginBottom: 20
    },
    address: {
        fontWeight: 400,
        maxWidth: 150,
        marginBottom: 20
    },
    phone: {
        fontWeight: 400,
        maxWidth: 150
    }
})

const Footer = ({classes}) => {
    return (
        <div className={classes.root}>
            <div className={classes.social}>
                <Icon name='facebook' color='rgba(255, 255, 255, 0.8)'/>
            </div>
            <div className={classes.address}>
                Giulia 1682 Massachusetts Avenue
                Cambridge, MA 02138
            </div>
            <div className={classes.phone}>
                (305) 992-2461
            </div>
        </div>
    )
};

export default withStyles(styles)(Footer)