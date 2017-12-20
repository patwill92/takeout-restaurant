import React from 'react'
import withStyles from 'react-jss'
import {connect} from 'react-redux'
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
        opacity: '0.9',
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
        opacity: '0.9',
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
        opacity: '0.8',
        '&:hover': {
            cursor: 'pointer'
        }
    }
});

const SpecialsCard = ({classes, title, info, menu}) => {
    return (
        <Card className={classes.root}>
            <Card.Content className={classes.content}>
                <Card.Header className={classes.title}>Specials</Card.Header>
                <List divided relaxed>
                    {menu.slice(2,5).map((item, index) => (
                        <List.Item key={index} className={classes.item}>
                            <List.Content >
                                <List.Header className={classes.itemTitle}>{item.name}</List.Header>
                                <List.Description className={classes.description}>{item.description}</List.Description>
                                <List.Description className={classes.description} style={{fontSize: '0.8rem', marginBottom: 0}}>
                                    $ {item.price.toFixed(2)}</List.Description>
                            </List.Content>
                        </List.Item>
                    ))}
                </List>
                <Card.Meta className={classes.subtitle}>full menu</Card.Meta>
            </Card.Content>
        </Card>
    )
};

const mapStateToProps = ({menu}) => {
    return {
        menu: menu.clientMenu
    }
};

export default connect(mapStateToProps)(withStyles(styles)(SpecialsCard))