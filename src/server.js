import express from 'express';
import {matchRoutes} from 'react-router-config'
import mongoose from 'mongoose'

import Routes from './client/Routes'
import renderer from './helpers/renderer';
import {server as createServerStore} from './helpers/store'
import Models from './models'

import api from './api/apiMenu'
import keys from './config/keys'

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, {useMongoClient: true});
Models();
app.use(express.static('public'));
app.use('/api', api);

app.get('*', (req, res) => {
    const store = createServerStore();
    let promises = matchRoutes(Routes, req.url).map(({route}) => {
        return route.loadData ? route.loadData(mongoose) : null
    }).filter(promise => promise);

    Promise.all(promises).then((promise) => {
        if(promise[0]) {
            promise[0].forEach(({data, func}) => {
                store.dispatch(func(data))
            })
        }
        const context = {};
        const content = renderer(req, store, context);
        res.send(content);
    })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
