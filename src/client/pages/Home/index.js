import React, {Component} from 'react'
import withStyles from 'react-jss'
import {Grid} from 'semantic-ui-react'
import {connect} from 'react-redux';

import {fetchMenu, fetchMenuServer} from "../../actions/index";
import HomeCard from './HomeCard'

const styles = theme => ({
    root: {}
});

class Home extends Component {

    componentDidMount = () => {
        this.props.fetchMenu();
        console.log(this.props.menu);
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

const mapStateToProps = ({menu}) => {return {menu}};

const loadData = async (Model) => {
    let {MenuItem} = Model;
    let menu = await MenuItem.find({available: true})
    return {
        data: {
            menu
        },
        func: fetchMenuServer

    }
}

export default {
    component: connect(mapStateToProps, {fetchMenu})(withStyles(styles)(Home)),
    loadData
}
