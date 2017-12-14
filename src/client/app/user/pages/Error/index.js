import React, {Component} from 'react'
import withStyles from 'react-jss'
import {Link} from 'react-router-dom'

const styles = theme => ({
    error: {
        textAlign: 'center',
        color: theme.palette.primary
    }
})

class Error extends Component {
    render() {
        let {classes} = this.props;
        return (
            <div>
                <h1 className={classes.error}>404 ERROR</h1>
                <h2 className={classes.error}>Page not found</h2>
                <h3 style={{textAlign: 'center', textDecoration: 'underline'}}><Link to='/'>Go Home</Link></h3>
            </div>
        )
    }
}

export default {
    component: withStyles(styles)(Error)
};
