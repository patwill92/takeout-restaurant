import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Field, reduxForm, change, formValueSelector} from 'redux-form'
import {Button, Form, Grid} from 'semantic-ui-react'
import withStyles from 'react-jss'

import validate from './data/validate'
import InputFields from './FormInputFields'
import {fieldData} from './data/index'
import Container from '../../../components/Container'
import Icon from '../../../components/Icon'
import ImageField from './FormImageField'


const styles = theme => ({
    root: {
        width: '100% !important',
        margin: 0 + ' !important'
    },
    column: {
        backgroundColor: '#fff !important',
        boxShadow: theme.shadows[4] + ' !important',
        borderRadius: 5,
        minHeight: 529.5 + ' !important'
    },
    form: {
        margin: 0 + '!important',
        maxHeight: 'inherit !important'
    },
    file: {
        border: `1px solid ${theme.palette.primary}`,
        borderRadius: 5,
        display: 'inline-block',
        padding: '6px 12px',
        cursor: 'pointer'
    },
    btn: {
        float: 'right',
        fontWeight: 400 + ' !important',
        textTransform: 'uppercase !important',
        color: '#fff !important',
        backgroundColor: theme.palette.primary + ' !important',
        boxShadow: theme.shadows[1] + ' !important',
        '&:hover': {
            boxShadow: theme.shadows[3] + ' !important'
        }
    }
});

class AddItemForm extends Component {
    state = {
        blob: '',
        name: '',
        height: ''
    };

    componentDidMount = () => {
        if(this.props.select) {
            document.querySelector('.text').classList.remove('default');
            document.querySelector('.text').innerHTML = this.props.select;
        }
    }

    onSelectChange = (payload) => {
        this.props.setSelect(payload);
        this.props.dispatch(change('addItem', 'category', payload))
    };

    onImgChange = (e) => {
        let file = e.target.files[0];
        console.log(file);
        this.setState({name: file.name});
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.props.setBlob(reader.result)
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    };

    componentWillUpdate = (nextProps) => {
        if (nextProps.price) {
            console.log(nextProps.price.length);
            let firstCondition = !(parseInt(nextProps.price) || Number(nextProps.price) === 0 || /\./.test(nextProps.price));
            if (nextProps.price.length === 1 && firstCondition) {
                this.props.dispatch(change('addItem', 'price', ''));
            }
            if (nextProps.price.length === 2 && (nextProps.price.match(/[0]/g) || []).length > 1) {
                this.props.dispatch(change('addItem', 'price', this.props.price));
            }
            if ((nextProps.price.match(/\./g) || []).length > 1) {
                this.props.dispatch(change('addItem', 'price', this.props.price));
            }
            if ((nextProps.price.match(/\./g) || []).length > 0 && !(/\.\d{0,2}?$/.test(nextProps.price))) {
                this.props.dispatch(change('addItem', 'price', this.props.price));
            }
        }
    };

    customSubmit = () => {
        this.props.setHeight(document.getElementById('form1').clientHeight);
        this.props.handleSubmit()
    }

    render() {
        let {classes, handleSubmit} = this.props;
        let fields = fieldData.map((field, i) => (
            <Field
                onSelectChange={this.onSelectChange}
                name={field.name}
                type={field.type}
                label={field.label}
                component={InputFields}
                value={field.value}
                key={field.value ? field.value : field.name}
                icon={field.icon}
                cat={field.select}
                textArea={field.textArea}
                radio={field.radio}
            />
        ));
        return (
            <Grid className={classes.root} centered>
                <Grid.Column id='form1'  className={classes.column} mobile={16} tablet={10} computer={8}>
                    <Container >
                        <Form onSubmit={this.customSubmit} className={classes.form}>
                            <Field name="image"
                                   label={this.props.blob}
                                   form={this.state.name}
                                   onChange={this.onImgChange}
                                   component={ImageField}
                                   classes={classes}
                            />
                            {fields}
                            <br/>
                            <Button
                                type='submit'
                                className={classes.btn}>Continue
                                <Icon color='#fff' style={{marginLeft: 5, fontSize: '0.9rem', bottom: 1}}
                                      name='chevronRight'/>
                            </Button>
                        </Form>
                    </Container>
                </Grid.Column>
            </Grid>
        )
    }
}


let AddItem = reduxForm({
    form: 'addItem',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    validate
})(withStyles(styles)(AddItemForm));

const formSelector = formValueSelector('addItem');
const mapStateToProps = state => {
    return {
        price: formSelector(state, 'price')
    }
};

export default connect(mapStateToProps)(AddItem)