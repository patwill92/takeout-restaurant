const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.firstName = 'Your name is required'
    }
    if(!values.email) {
        errors.email = 'Your email is required'
    }
    if(!values.phone) {
        errors.phone = 'Your phone number is required'
    }
    if(!values.password) {
        errors.password = 'Please set a password'
    } else if(values.password.length < 5) {
        errors.password = 'Password must be at least 5 characters long'
    }
    if(!values.password2) {
        errors.password2 = 'Please confirm your password'
    } else if(values.password2 !== values.password) {
        errors.password2 = 'Passwords must match'
    }
    return errors;
};

export default validate;