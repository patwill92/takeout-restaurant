import React, {Component} from 'react'
import withStyles from 'react-jss'
import {connect} from 'react-redux';
import axios from 'axios'
import {Link} from "react-router-dom"

import {fetchMenu, fetchMenuAdmin, getUser} from "../../../../actions";
import HomeCard from './HomeCard'

const styles = theme => ({
    '@global': {
        body: {
            backgroundColor: '#ffffff',
            backgroundImage: 'url("http://res.cloudinary.com/daj4m3xio/image/upload/e_colorize:100/v1511820883/45-degree-fabric-light_drgxti.png") !important',

        }
    },
    root: {
        width: '100% !important',
        height: 'auto'
    },
    parent: {
        columnGap: '12px',
        padding: '30px 0 !important',
        '& div': {
            pageBreakInside: 'avoid',
            breakInside: 'avoid',
            marginBottom: 12
        },
        '& .card': {
            boxShadow: theme.shadows[10] + ' !important'
        }
    },
    grid: {
        display: 'grid',
        gridGap: '12px',
        gridAutoRows: 'minmax(50px, auto)',
        marginRight: 12,
        '&:last-child': {
            marginRight: 0 + ' !important'
        }
    },
    '@media (min-width: 1200px)': {
        parent: {
            columnCount: 3
        },
    },
    '@media (min-width: 992px) and (max-width: 1199px)': {
        parent: {
            columnCount: 2
        }
    },
    '@media (min-width: 768px) and (max-width: 991px)': {
        parent: {
            columnCount: 2
        }
    },
    '@media (max-width: 767px)': {
        parent: {
            columnCount: 1,
            padding: '0 !important',
        }
    }
});

class Home extends Component {

    componentDidMount = () => {
        this.props.fetchMenu();
        this.props.getUser();
    };

    render() {
        let {classes} = this.props;
        let srcSalmon = 'http://www.seriouseats.com/recipes/assets_c/2017/04/20170406-salmon-burgers-vicky-wasik-18-thumb-1500xauto-437252.jpg';
        let srcMain = 'http://fast.clickbooq.com/c58447-986/040312_Mercer_Knives_0391_FF-lg.jpg';
        let srcTall = 'https://i.pinimg.com/736x/db/fd/49/dbfd49836e7f521056ecff279afa0f69--gourmet-burgers-burger-recipes.jpg';
        let src = 'https://www.goodfood.com.au/content/dam/images/g/s/p/r/l/u/image.related.wideLandscape.940x529.gsu081.png/1495780213265.jpg';
        let src2 = 'https://d36wnpk9e3wo84.cloudfront.net/menu-item-images/400/web-butter-burger-deluxe-double-bacon.jpg';
        return (
            <div className={classes.parent}>
                <div><HomeCard type='button' content='order now' className={classes.root}
                               src={'https://www.habitburger.com/wp-content/uploads/golden-chicken-widget.jpg'}/></div>
                <div><HomeCard type='specials' className={classes.root}/></div>
                <div><HomeCard type='image' className={classes.root} src={src}/></div>
                <div><HomeCard type='image' className={classes.root} src={srcMain}/></div>
                <div><HomeCard type='image' className={classes.root} src={srcSalmon}/></div>
                <div><HomeCard type='info' className={classes.root}/></div>
                <Link to="/menu"><div><HomeCard type='button' content='our menu' className={classes.root} src={srcTall}/></div></Link>
            </div>
        )
    }
}

const mapStateToProps = ({menu: {clientMenu, adminMenu}, user}) => {
    return {
        clientMenu,
        adminMenu,
        user
    }
};

const loadData = async (mongoose) => {
    let menu = await mongoose.model('Item').find({available: true});
    let adminMenu = await  mongoose.model('Item').find({});
    return [
        {
            data: menu,
            func: fetchMenu
        }
    ]
};

export default {
    component: connect(mapStateToProps, {fetchMenu, getUser})(withStyles(styles)(Home)),
    loadData
}
