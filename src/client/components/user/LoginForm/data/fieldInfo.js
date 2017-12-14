export default {
    inputs: [
        {
            name: 'email',
            type: 'text',
            label: 'Email',
            icon: 'at'
        },{
            name: 'password',
            type: 'password',
            label: 'Password',
            icon: 'unlock'
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
