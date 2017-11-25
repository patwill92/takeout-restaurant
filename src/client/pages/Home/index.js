import React, {Component} from 'react'
import withStyles from 'react-jss'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux';

import {fetchMenu, fetchMenuServer, fetchMenuAdminServer} from "../../actions/index";
import HomeCard from './HomeCard'

const styles = theme => ({
    root: {}
});

class Home extends Component {

    componentDidMount = () => {
        this.props.fetchMenu();
        console.log(this.props.clientMenu);
    }

    render() {
        return (
            <Grid columns='equal'>
                <Grid.Row>
                    <Grid.Column>
                        <HomeCard/>
                    </Grid.Column>
                    <Grid.Column>
                        <HomeCard/>
                    </Grid.Column>
                    <Grid.Column>
                        <HomeCard/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <HomeCard/>
                    </Grid.Column>
                    <Grid.Column>
                        <HomeCard/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }
}

const mapStateToProps = ({menu: {clientMenu, adminMenu}}) => {
    return {
        clientMenu,
        adminMenu
    }
};

const loadData = async (mongoose) => {
    let menu = await mongoose.model('Item').find({available: true});
    let adminMenu = await  mongoose.model('Item').find({});
    return [
        {
            data: menu,
            func: fetchMenuServer
        },
        {
            data: adminMenu,
            func: fetchMenuAdminServer
        }
    ]
}

export default {
    component: connect(mapStateToProps, {fetchMenu})(withStyles(styles)(Home)),
    loadData
}
