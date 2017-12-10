export default {
    inputs: [
        {
            name: 'name',
            type: 'text',
            label: 'Full Name',
            icon: 'user'
        },{
            name: 'email',
            type: 'text',
            label: 'Email',
            icon: 'at'
        },{
            name: 'phone',
            type: 'text',
            label: 'Phone Number',
            icon: 'phone'
        },{
            name: 'password',
            type: 'password',
            label: 'Password',
            icon: 'unlock'
        },{
            name: 'password2',
            type: 'password',
            label: 'Confirm Password',
            icon: 'lock'
        }
    ],
    buttons: [
        {
            name: 'email',
            icon: 'envelope',
            color: 'rgba(0,0,0,0.8)'
        },
        {
            name: 'facebook',
            icon: 'facebookF',
            color: '#3b5998'
        },
        {
            name: 'google',
            icon: 'google',
            color: '#d62d20'
        }
    ]
}
