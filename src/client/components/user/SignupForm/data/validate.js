const validate = values => {
    const errors = {};
    if(!values.name) {
        errors.name = 'Your name is required'
    }
    if(!values.email) {
        errors.email = 'Your email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if(!values.phone) {
        errors.phone = 'Your phone number is required'
    } else if(!/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(values.phone)) {
        errors.phone = 'Invalid phone number'
    }
    if(!values.password) {
        errors.password = 'Please set a password'
    } else if(values.password.length < 4) {
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