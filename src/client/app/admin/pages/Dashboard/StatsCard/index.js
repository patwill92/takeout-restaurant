import React from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Card} from 'semantic-ui-react'

import Icon from '../../../../components/Icon/index'

const styles = theme => ({
    cardContentWrapper: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardInfoWrapper: {
        display: 'flex',
        justifyContent: 'space-around',
        flexDirection: 'column',
        padding: '10 0',
        '& *': {
            color: '#fff !important',
            fontWeight: 300,
            margin: 0
        }
    },
    cardInfoTitle: {
        textAlign: 'right',
        fontSize: '3.0rem !important'
    },
    card: {
        minWidth: 250 + ' !important',
        alignSelf: 'center !important',
        '&:hover': {
            cursor: 'pointer',
            boxShadow: theme.shadows[4] + ' !important'
        },
        '&:active': {
            boxShadow: theme.shadows[2] + ' !important'
        },
        boxShadow: theme.shadows[2] + ' !important'
    },
    cardFooter: {
        background: '#e5e5e5 !important',
        '& *': {
            fontWeight: 300,
            margin: 0 + ' !important',
            '&:hover': {
                cursor: 'pointer'
            }
        }
    },
    '@media (min-width: 768px) and (max-width: 951px)': {
        card: {
            width: '100% !important'
        }
    },
    '@media (max-width: 576px)': {
        card: {
            width: '100% !important'
        }
    }
});

const Dashboard = props => {
    let {classes, color, title, icon} = props;
    return (
        <Card className={classes.card} style={{background: color}}>
            <Card.Content>
                <div className={classes.cardContentWrapper}>
                    <div>
                        <h1 style={{fontSize: 100}}>
                            <Icon color={'#fff'} svgStyle={{position: 'static'}} name={icon}/>
                        </h1>
                    </div>
                    <div className={classes.cardInfoWrapper}>
                        <h1 className={classes.cardInfoTitle}>27</h1>
                        <p>{title}</p>
                    </div>
                </div>
            </Card.Content>
            <Card.Content extra className={classes.cardFooter} style={{border: `0.5px solid ${color}`}}>
                <div className={classes.cardContentWrapper}>
                    <p style={{color: color, fontSize: '0.9rem'}}>View Details</p>
                    <Icon color={color} svgStyle={{position: 'static'}} name='arrowCircleRight'/>
                </div>
            </Card.Content>
        </Card>
    )
};

const mapStateToProps = ({menu}) => {
    return {
        menu
    }
};

export default connect(mapStateToProps)(withStyles(styles)(Dashboard))