import React from 'react'
import withStyles from 'react-jss'
import { Card } from 'semantic-ui-react'

const styles = theme => ({
    root: {
        width: '100% !important',
        height: 'auto !important'
    }
});

const HomeCard = ({classes, image, content}) => {
    let src = 'https://www.goodfood.com.au/content/dam/images/g/s/p/r/l/u/image.related.wideLandscape.940x529.gsu081.png/1495780213265.jpg'
    return (
        <Card className={classes.root} image={src} />
    )
}

export default withStyles(styles)(HomeCard)