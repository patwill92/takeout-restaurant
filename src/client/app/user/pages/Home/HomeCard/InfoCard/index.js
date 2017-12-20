import React from 'react'
import withStyles from 'react-jss'
import {Card} from 'semantic-ui-react'

const styles = theme => ({
    root: {
        width: '100% !important',
        padding: 20 + ' !important',
        backgroundColor: theme.palette.primary + ' !important',
        backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/v1511822287/black-linen_vglyyw.png") !important'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 400 + ' !important',
        borderBottom: '1px solid #fff !important',
        color: '#fff !important',
        opacity: '0.9',
        paddingBottom: 10,
        fontSize: '1.7rem !important'
    },
    description: {
        fontSize: '1.0rem !important',
        textTransform: 'uppercase',
        color: '#fff !important',
        fontWeight: 300 + ' !important',
        opacity: '0.9'
    },
    subtitle: {
        marginBottom: 0 + ' !important',
        textTransform: 'uppercase',
        color: '#fff !important',
        fontWeight: 400 + ' !important',
        opacity: '0.8',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

const InfoCard = ({classes, title, info}) => {
    return (
        <Card className={classes.root}>
            <Card.Content>
                <Card.Header className={classes.title}>About Us</Card.Header>
                <Card.Description className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at aut, delectus
                    harum impedit ipsa libero nihil porro possimus suscipit.</Card.Description>
                <Card.Meta className={classes.subtitle}>Learn More</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default withStyles(styles)(InfoCard)