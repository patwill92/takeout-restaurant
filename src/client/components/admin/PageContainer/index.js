import React, {Component} from 'react'
import {Menu, Input, Segment, Card, Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        width: '100% !important',
        margin: 0 + ' !important'
    },
    header: {
        color: '#333',
        textTransform: 'uppercase',
        fontWeight: 400 + ' !important',
        lineHeight: '100%',
        padding: 14
    }
})

class PageContainer extends Component {
    state = {activeItem: 'home'}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        let {classes, children} = this.props;
        return (
            <Grid className={classes.root} >
                <Card fluid>
                    <Card.Content style={{backgroundColor: '#DCEDC8', padding: 0}}>
                        <Card.Header className={classes.header}>
                            {children[0]}
                        </Card.Header>
                    </Card.Content>
                    <Card.Content>
                        {children[1]}
                    </Card.Content>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(PageContainer)