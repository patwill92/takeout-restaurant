import React, {Component} from 'react'
import {Menu, Input, Segment, Card, Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        width: '100% !important',
        margin: 0 + ' !important',
        marginBottom: 10 + ' !important'
    },
    header: {
        color: '#333',
        textTransform: 'uppercase',
        fontWeight: 400 + ' !important',
        lineHeight: '100%',
        padding: 14
    },
    '@media (max-width: 767px)': {
        '@global': {
            body: {
                '& .ui.card>:first-child': {
                    borderRadius: 0 + ' !important'
                },
                '& .ui.cards>.card>:first-child': {
                    borderRadius: 0 + ' !important'
                },
                '& .segment:last-child': {
                    borderBottom: 0 + ' !important',
                    borderRadius: '0 !important'
                },
                '& .card': {
                    boxShadow: theme.shadows[0] + ' !important'
                }
            }
        }
    }
})

class PageContainer extends Component {
    state = {activeItem: 'home'};

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        let {classes, children, style, contentStyle} = this.props;
        return (
            <Grid className={classes.root} style={style && {...style}}>
                <Card fluid>
                    <Card.Content id={'content'} style={{backgroundColor: '#DCEDC8', padding: 0}} className={classes.content}>
                        <Card.Header className={classes.header}>
                            {children[0]}
                        </Card.Header>
                    </Card.Content>
                    <Card.Content style={contentStyle && {...contentStyle}}>
                        {children[1]}
                    </Card.Content>
                </Card>
            </Grid>
        )
    }
}

export default withStyles(styles)(PageContainer)