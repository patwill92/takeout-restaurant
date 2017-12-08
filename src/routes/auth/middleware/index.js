export default (check, User) => {
    return {
        login: [
            check('email')
                .exists()
                .withMessage('email is required')
                .isEmail()
                .withMessage('incorrect email format')
                .trim()
                .normalizeEmail()
                .custom(async (value) => {
                    try {
                        return await User.findOne({email: value});
                    } catch (e) {
                        console.log(e);
                    }
                })
                .withMessage('email does not exist'),
            check('password')
                .exists()
                .withMessage('password is required')
        ],
        signup: [
            check('name', 'name is required').exists(),
            check('email')
                .exists()
                .withMessage('email is required')
                .isEmail()
                .withMessage('incorrect email format')
                .trim()
                .normalizeEmail()
                .custom(async (value) => {
                    try {
                        return !await User.findOne({email: value});
                    } catch (e) {
                        console.log(e);
                    }
                })
                .withMessage('email already exists'),
            check('phone')
                .exists()
                .withMessage('phone is required')
                .matches(/^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/)
                .withMessage('please enter a valid US phone number'),
            check('password')
                .exists()
                .withMessage('password is required')
                .isLength({min: 4})
                .withMessage('passwords must be at least 4 chars long'),
            check('password2', 'passwords must match')
                .exists()
                .custom((value, {req}) => value === req.body.password)
        ]
    }
}