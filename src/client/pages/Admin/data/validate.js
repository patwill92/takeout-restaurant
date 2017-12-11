const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = 'A name is required'
    }
    if(!values.price) {
        errors.price = 'Please add a price'
    } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
        errors.price = 'Price must be a number'
    }
    if(!values.category) {
        errors.category = 'Please add category'
    }
    if(!values.availability) {
        errors.availability = 'Please confirm availability'
    }
    return errors;
};

export default validate;