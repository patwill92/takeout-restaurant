import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import ToggleButton from 'react-toggle-button'

import {fetchMenu, updateAvailability} from "../../../../../../actions";
import PageContainer from '../../../../components/PageContainer'
import Icon from '../../../../../components/Icon'

const styles = theme => ({
    content: {
        '& .segment': {
            border: 0 + ' !important',
            borderBottom: '1px solid #dbe0e0 !important',
            borderRadius: '0px !important'
        },
        '& .segment:last-child': {
            borderBottom: 0 + ' !important',
            borderBottomLeftRadius: '5px !important',
            borderBottomRightRadius: '5px !important'
        }
    },
    segment: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemInfo: {
        '& *': {
            fontWeight: 400,
            marginTop: 0 + ' !important'
        },
        marginRight: 10
    },
    toggle: {
        '& div': {
            marginLeft: 'auto !important',
            marginRight: 'auto !important',
        },
        '& div div:child(1)': {
            backgroundColor: 'red !important'
        }
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        overflow: 'hidden !important',
        alignItems: 'center',
        alignContent: 'center',
        minHeight: '75px !important',
        marginBottom: '5px !important',
        borderRadius: '50% !important'
    }
});

const MenuItemOverview = (props)=>{
        let {classes, type} = props;
        return (
            <PageContainer contentStyle={{padding: 0}}>
                <span>{type}</span>
                <div className={classes.content}>
                    {props.menu && props.menu.map((item, i) => {
                        return (props.categoryDriven?item.category === type:true) && (
                            <Segment className={classes.segment} key={item.name} style={{margin: 0}}>
                                <div className={classes.itemInfo}>
                                    <h3>{item.name}</h3>
                                    <h5>$ {item.price.toFixed(2)}</h5>
                                    <p>{item.description}</p>
                                </div>
                                <div className={classes.toggle}>
                                    <div className={classes.image} style={{marginBottom: 5}}>
                                        <img src={item.image} style={{maxWidth: 75, height: 'auto'}} alt=""/>
                                    </div>
                                {props.admin?(<ToggleButton
                                    colors={{
                                        activeThumb: {
                                            base: 'rgb(250,250,250)'
                                        },
                                        inactiveThumb: {
                                            base: 'rgb(250,250,250)'
                                        },
                                        active: {
                                            base: '#4CAF50'
                                        },
                                        inactive: {
                                            base: '#F44336'
                                        }
                                    }}
                                    inactiveLabel={<Icon name='times' color='#fff' style={{bottom: 1}}/>}
                                    activeLabel={<Icon name='check' color='#fff' style={{bottom: 1}}/>}
                                    value={item.available}
                                    onToggle={() => props.updateAvailability(item._id, item.available)}/>):null}
                                </div>
                            </Segment>
                        )
                    })}
                </div>
            </PageContainer>
        )
    }

export default connect(null, {fetchMenu, updateAvailability})(withStyles(styles)(MenuItemOverview))