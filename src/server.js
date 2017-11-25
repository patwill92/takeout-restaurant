import express from 'express';
import {matchRoutes} from 'react-router-config'
import mongoose from 'mongoose'

import Routes from './client/Routes'
import renderer from './helpers/renderer';
import {server as createServerStore} from './helpers/store'
import Models from './models'

import api from './api/apiMenu'

const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://restaurant-dev:rest-dev@ds117316.mlab.com:17316/restaurant-dev');
app.use(express.static('public'));
app.use('/api', api);

app.get('*', (req, res) => {
    const store = createServerStore();
    let promises = matchRoutes(Routes, req.url).map(({route}) => {
        return route.loadData ? route.loadData(Models) : null
    }).filter(promise => promise);

    Promise.all(promises).then((promise) => {
        if(promise[0]) {
            let {data, func} = promise[0];
            store.dispatch(func(data))
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
