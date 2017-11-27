import React from 'react'
import withStyles from 'react-jss'
import { Card } from 'semantic-ui-react'

const styles = theme => ({
    root: {
        width: '100% !important',
        height: 'auto !important'
    }
});

const ImageCard = ({classes, src}) => <Card className={classes.root} image={src} />

export default withStyles(styles)(ImageCard)