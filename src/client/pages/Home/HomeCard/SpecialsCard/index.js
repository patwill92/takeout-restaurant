import React from 'react'
import withStyles from 'react-jss'
import {Card, List} from 'semantic-ui-react'

const styles = theme => ({
    root: {
        width: '100% !important',
        padding: 25 + ' !important',
        backgroundColor: theme.palette.primary + ' !important',
        backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/v1511822287/black-linen_vglyyw.png") !important'
    },
    title: {
        textTransform: 'uppercase',
        fontWeight: 400 + ' !important',
        borderBottom: '1px solid #fff !important',
        color: '#fff !important',
        opacity: '0.8',
        paddingBottom: 10,
        fontSize: '1.7rem !important'
    },
    content: {
      padding: 0 + ' !important'
    },
    itemTitle: {
        textTransform: 'uppercase',
        fontWeight: 400 + ' !important',
        color: '#fff !important',
        opacity: '0.9',
        fontSize: '1.0rem !important',
        marginBottom: 4 + ' !important'
    },
    description: {
        fontSize: '1.0rem !important',
        color: '#fff !important',
        fontWeight: 300 + ' !important',
        opacity: '0.8',
        marginBottom: 4 + ' !important'
    },
    item: {
        marginBottom: 0 + ' !important',
        padding: 0 + ' !important'
    },
    subtitle: {
        marginBottom: 0 + ' !important',
        textTransform: 'uppercase',
        color: '#fff !important',
        fontWeight: 400 + ' !important ',
        opacity: '0.6',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

const SpecialsCard = ({classes, title, info}) => {
    return (
        <Card className={classes.root}>
            <Card.Content className={classes.content}>
                <Card.Header className={classes.title}>Specials</Card.Header>
                <List divided relaxed>
                    {Array(3).fill().map(() => (
                        <List.Item className={classes.item}>
                            <List.Content >
                                <List.Header className={classes.itemTitle}>Avo-Chicken Burger</List.Header>
                                <List.Description className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</List.Description>
                                <List.Description className={classes.description} style={{fontSize: '0.8rem', marginBottom: 0}}>$ 9.00</List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
                <Card.Meta className={classes.subtitle}>full menu</Card.Meta>
            </Card.Content>
        </Card>
    )
}

export default withStyles(styles)(SpecialsCard)