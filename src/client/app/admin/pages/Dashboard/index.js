import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Card} from 'semantic-ui-react'

import StatsCard from './StatsCard/index'
import data from './data/index'
import {fetchAdminTab} from "../../../../actions/index";


const styles = theme => ({
    root: {}
});

class Dashboard extends Component {
    componentDidMount = () => {
        this.props.fetchAdminTab('dashboard')
    };
    render() {
        let {classes} = this.props;
        return (
            <Card.Group stackable textAlign='center' itemsPerRow={3} style={{margin: 0, justifyContent: 'center', alignItems: 'center'}}>
                {data.map((card, i) => <StatsCard color={card.color} title={card.title} icon={card.icon} key={i}/>)}
            </Card.Group>
        )
    }
}

const loadData = () => [{data: 'dashboard', func: fetchAdminTab}];

const mapStateToProps = ({menu}) => {
    return {
        menu
    }
};

export default {
    component: connect(mapStateToProps, {fetchAdminTab})(withStyles(styles)(Dashboard)),
    loadData
}