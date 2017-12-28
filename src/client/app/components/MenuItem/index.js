import React, {Component} from 'react'
import {Segment} from 'semantic-ui-react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import ToggleButton from 'react-toggle-button'

import {fetchMenu, updateAvailability} from "../../../actions";
import PageContainer from '../../admin/components/PageContainer'
import Icon from '../Icon'

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
    },
    Button:{
        outline:"none",
        borderLeft : "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "10px solid #c1202b",
        borderTop:"none",
        padding:"0px",
        marginBottom:"2.5px",
        transition:"background-color ease-in-out .2s",
        height:"0px",
        width:"0px",
        '&:hover': {
            cursor: 'pointer',
            borderBottom: "10px solid #DCEDC8"
        }
    },
    ButtonBottom:{
        outline:"none",
        borderLeft : "10px solid transparent",
        borderRight: "10px solid transparent",
        borderTop: "10px solid #c1202b",
        borderBottom:"none",
        marginTop:"2.5px",
        padding:"0px",
        transition:"background-color ease-in-out .2s",
        height:"0px",
        width:"0px",
        '&:hover': {
            cursor: 'pointer',
            borderTop: "10px solid #DCEDC8"
        }
    },
    Amount:{
        padding:"3px 2px 5px 0px",
        margin:"0px",
    }
});

const MenuItemOverview = (props)=>{
        let {classes, type} = props;
        return (
            <PageContainer contentStyle={{padding: 0}}>
                <span>{type}</span>
                <div className={classes.content}>
                    {props.menu && props.menu.map((itemValue, i) => {
                        const item = itemValue.item || itemValue;
                        const quantity = itemValue.quantity === undefined?null:itemValue.quantity;
                        return (props.categoryDriven?item.category === type:true) && (
                            <Segment className={classes.segment} key={item._id} style={{margin: 0}}>
                                <div className={classes.itemInfo}>
                                    <h3>{item.name}</h3>
                                    <h5>${Number(item.price).toFixed(2)}</h5>
                                    <p>{item.description}</p>
                                   {quantity !== null?
                                    <div style={{display: "flex",justifyContent:"left"}}>
                                        <span className={classes.Amount}>Amount : {quantity}</span>
                                        <div style={{display:"inline-flex",justifyContent:"center",flexDirection:"column",height:"100%"}}>
                                        <button className={classes.Button} onClick={()=>{props.changed("up",i)}} />
                                        <button className={classes.ButtonBottom} onClick={()=>{props.changed("down",i)}} />
                                        </div>
                                   </div>:null} 
                                </div>
                                <div className={classes.toggle}>
                                    <div className={classes.image} style={{marginBottom: 5}}>
                                        <img src={item.image} style={{maxWidth: "75px", height: 'auto'}} alt=""/>
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
                                    onToggle={() => props.updateAvailability(item._id, item.available,props.menu,i)}/>):null}
                                </div>
                            </Segment>
                        )
                    })}
                 {props.total?<Segment><h3 style={{marginTop:"-20px",marginBottom:"-20px"}}>Total: ${props.total.toFixed(2)}</h3></Segment>:null}
                </div>
            </PageContainer>
        )
    }

export default connect(null, {fetchMenu, updateAvailability})(withStyles(styles)(MenuItemOverview))