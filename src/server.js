import express from 'express';
import {matchRoutes} from 'react-router-config'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import expressValidator from 'express-validator'
import cookieParser from 'cookie-parser'
import session from 'express-session'
import MyMongoStore from 'connect-mongo'
import passport from 'passport'
import cloudinary from 'cloudinary'

import Routes from './client/Routes'
import renderer from './helpers/renderer';
import {server as createServerStore} from './helpers/store'
import Models from './models'
import keys from './config/keys.js'
import api from './routes/api/apiMenu'
import localAuth from './routes/auth/authLocal'
import oAuth from './routes/auth/oAuth'
import {toggleSideNav, getUser} from './client/actions'

const MongoStore = MyMongoStore(session);
const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useMongoClient: true});

Models();
import './services/passport';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(session({
    secret: keys.cookieKey,
    saveUninitialized: false,
    resave: false,
    store: new MongoStore({
        url: keys.mongoURI,
        ttl: 14 * 24 * 60 * 60
    })
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(expressValidator({
    errorFormatter(param, msg, value) {
        let namespace = param.split('.')
            , root = namespace.shift()
            , formParam = root;
        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

app.use(express.static('public'));
app.use('/api', api);
app.use('/user', localAuth);
app.use('/auth', oAuth);

app.get('*', (req, res) => {
    const store = createServerStore();
    let promises = matchRoutes(Routes, req.url).map(({route}) => {
        return route.loadData ? route.loadData(mongoose) : null
    }).filter(promise => promise);

    Promise.all(promises).then((promise) => {
        if(promise[0]) {
            promise[0].forEach(({data, func}) => {
                req.dispatchData = data;
                store.dispatch(func(req))
            })
        }
        store.dispatch(toggleSideNav(false));
        store.dispatch(getUser(req));
        const context = {};
        const content = renderer(req, store, context);
        res.send(content);
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
