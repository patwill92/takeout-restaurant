import React, {Component, Fragment} from 'react'
import {Segment, Form, TextArea} from 'semantic-ui-react'
import withStyles from 'react-jss'
import {connect} from "react-redux"

import {fetchMenu, updateAvailability} from "../../../../../../actions";
import PageContainer from '../../../../components/PageContainer'
import Icon from '../../../../../components/Icon'
import axios from "axios/index";
import ImageField from '../../../../components/FormImageField/index'

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
            marginTop: 0 + ' !important'
        },
        marginRight: 20,
        '& input': {
            padding: 3 + ' !important'
        },
        '& textarea': {
            padding: 3 + ' !important'
        }
    },
    imageContainer: {
        display: 'flex'
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    info: {
        fontWeight: 400,
        height: 25,
        marginBottom: 7
    },
    infoTitle: {
        textTransform: 'uppercase',
        marginBottom: 5,
        '& span': {
            cursor: 'pointer',
        }
    },
    infoTitleImage: {
        textTransform: 'uppercase',
        marginBottom: 5,
        '& span': {
            cursor: 'pointer',
        }
    },
    '@media (min-width: 992px)': {
        imageInfo: {
            flex: 1,
        },
        image: {
            flex: 0,
        },
        infoTitleImage: {
            textAlign: 'right'
        }
    },
    '@media (max-width: 991px)': {
        imageContainer: {
            flexDirection: 'column'
        },
        imageInfo: {
            order: 2
        },
        image: {
            order: 1
        },
        infoTitleImage: {
            textAlign: 'center'
        }
    },
});

const Item = ({title, state, id, editItem, back, classes, value, updateItem, binder, width}) => {
    return (
        <Fragment>
            <h5 className={classes.infoTitle}>
                {state.item !== id + title &&
                <span onClick={editItem}>
                        <span style={{textTransform: 'capitalize'}}>{title}</span>
                        <span style={{fontSize: '1.2rem'}}>
                            <Icon
                                style={{marginLeft: 7, cursor: 'pointer'}}
                                name='edit'
                                color='#2185d0'/>
                        </span>
                    </span>}
                {state.item === id + title &&
                <span>
                <span style={{textTransform: 'capitalize'}}>{title}</span>
                <span onClick={back}
                      style={{fontSize: '1.2rem'}}>
                    <Icon style={{marginLeft: 7, bottom: 1, cursor: 'pointer'}} name='ban'
                          color='#F44336'/>
                </span>
                <span onClick={() => updateItem(id, title, state.field)}
                      style={{fontSize: '1.2rem'}}>
                    <Icon style={{marginLeft: 7, bottom: 1, cursor: 'pointer'}} name='save'
                          color='#4CAF50'/>
                </span>
            </span>}
            </h5>
            {state.item !== id + title && (title==='description' ?
                <p style={{maxWidth: 300}}>{value}</p>:
                <h5 className={classes.info}>{title === 'price' ? `$ ${value.toFixed(2)}` : value}</h5>)}
            {state.item === id + title && (title !== 'description' ?
                <Form.Input onChange={(e) => binder.setState({field: e.target.value})} value={state.field} type="text"
                            style={{marginBottom: 7}}/> :
                <Form style={{margin: 0, minWidth: width}}>
                    <Form.Field>
                        <textarea onChange={(e) => binder.setState({field: e.target.value})} value={state.field} rows="3"/>
                    </Form.Field>
                </Form>)}
        </Fragment>
    )
};

class EditMenuItem extends Component {
    state = {
        item: '',
        spin: '',
        field: '',
        blob: '',
        file: ''
    };

    updateItem = async (id, param, value) => {
        if (param === 'image') {
            let formData = new FormData();
            let item = {id, param, image: value};
            for (const name in item) {
                formData.append(name, item[name])
            }
            let {data} = await axios.post('/api/edit_item', formData, {headers: {'Content-Type': 'multipart/form-data'}});
            this.props.fetchMenu({clientData: data});
            this.setState({spin: '', item: ''});
        } else {
            this.setState({spin: id + param});
            let {data} = await axios.post('/api/edit_item', {id, param, value});
            this.props.fetchMenu({clientData: data});
            this.setState({spin: '', item: ''});
        }
    };

    onImgChange = (e, id) => {
        let file = e.target.files[0];
        if(file) {
            this.setState({field: file.name, file, item: id + 'image'});
        }
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.setState({blob: reader.result})
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    render() {
        let {classes, type} = this.props;
        console.log(this.state);
        return this.props.menu && (
            <PageContainer contentStyle={{padding: 0}}>
                <span>{type}</span>
                <div className={classes.content}>
                    {this.props.menu && this.props.menu.map(item => {
                        return item.category === type && (
                            <Segment className={classes.segment} key={item.name} style={{margin: 0}}>
                                <div ref={(val) => this.myWidth = val} className={classes.itemInfo}>
                                    {['name', 'price', 'description'].map((title) => (
                                            <Item
                                                width={this.myWidth && this.myWidth.clientWidth}
                                                key={title + item._id}
                                                title={title}
                                                id={item._id}
                                                editItem={() => this.setState({item: item._id + title, field: item[title]})}
                                                back={() => this.setState({item: ''})}
                                                updateItem={this.updateItem}
                                                value={item[title]}
                                                binder={this}
                                                classes={classes}
                                                state={this.state}/>
                                        )
                                    )}
                                </div>
                                <div className={classes.imageContainer}>
                                    <div className={classes.imageInfo} style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        maxWidth: 200
                                    }}>
                                        <h5 className={classes.infoTitleImage} style={{
                                            marginBottom: 7,
                                            cursor: 'pointer'

                                        }}>
                                            {this.state.item !== item._id + 'image' &&
                                            <span style={{textTransform: 'capitalize'}}
                                                  onClick={() => this.setState({item: item._id + 'image'})}
                                            ><span style={{fontSize: '1.2rem'}}><Icon
                                                style={{marginRight: 7, cursor: 'pointer'}} name='edit'
                                                color='#2185d0'/></span>
                                            image
                                        </span>}
                                            {this.state.item === item._id + 'image' &&
                                            <span style={{textTransform: 'capitalize'}}>
                                                <span onClick={() => this.setState({
                                                    item: '',
                                                    blob: '',
                                                    field: ''
                                                })}>
                                                    <Icon style={{marginRight: 7, bottom: 1, cursor: 'pointer'}}
                                                          name='ban'
                                                          color='#F44336'/>
                                                </span>
                                                <span
                                                    onClick={() => this.updateItem(item._id, 'image', this.state.file)}
                                                    style={{fontSize: '1.2rem'}}>
                                                    <Icon style={{marginRight: 7, bottom: 1, cursor: 'pointer'}}
                                                          name='save'
                                                          color='#4CAF50'/>
                                                </span>
                                                image
                                            </span>}
                                        </h5>
                                        {this.state.item === item._id + 'image' ?
                                            <ImageField loose value={this.state.field}
                                                        onChange={(e) => this.onImgChange(e, item._id)}/> :
                                            <ImageField loose value={''}
                                                        onChange={(e) => this.onImgChange(e, item._id)}/>
                                        }
                                    </div>
                                    {(this.state.item === item._id + 'image' && this.state.blob) ?
                                        <div className={classes.image} style={{marginLeft: 5}}>
                                            <img src={this.state.blob} style={{maxWidth: 100, height: 'auto'}} alt=""/>
                                        </div> :
                                        <div className={classes.image} style={{marginLeft: 5}}>
                                            <img src={item.image} style={{maxWidth: 100, height: 'auto'}} alt=""/>
                                        </div>
                                    }
                                </div>
                            </Segment>
                        )
                    })}
                </div>
            </PageContainer>
        )
    }
}

const mapStateToProps = ({menu}) => {
    return {
        menu: menu.clientMenu
    }
};

export default connect(mapStateToProps, {fetchMenu, updateAvailability})(withStyles(styles)(EditMenuItem))