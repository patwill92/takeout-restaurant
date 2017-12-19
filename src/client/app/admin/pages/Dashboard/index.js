import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from "react-redux"
import {Card} from 'semantic-ui-react'

import StatsCard from './StatsCard/index'
import data from './data/index'
import {fetchAdminTab, fetchAdminSubNav, fetchMenu} from "../../../../actions/index";


const styles = theme => ({

});

class Dashboard extends Component {
    componentDidMount = () => {
        this.props.fetchAdminTab('dashboard');
        this.props.fetchAdminSubNav('');
        this.props.fetchMenu();
    };

    render() {
        let {classes} = this.props;
        return (
            <Card.Group stackable textAlign='center' itemsPerRow={3}
                        style={{margin: 0, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                {data.map((card, i) => <StatsCard color={card.color} title={card.title} icon={card.icon} key={i}/>)}
            </Card.Group>
        )
    }
}

const loadData = (mongoose) => {
    return [
        {
            data: 'dashboard',
            func: fetchAdminTab
        },
        {
            data: '',
            func: fetchAdminSubNav
        }
    ];
};

const mapStateToProps = ({menu}) => {
    return {
        menu
    }
};

export default {
    component: connect(mapStateToProps, {fetchAdminTab, fetchAdminSubNav, fetchMenu})(withStyles(styles)(Dashboard)),
    loadData
}