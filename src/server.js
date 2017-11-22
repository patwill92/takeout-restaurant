import express from 'express';
import {matchRoutes} from 'react-router-config'
import Routes from './client/Routes'
import renderer from './helpers/renderer';

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
  let promises = matchRoutes(Routes, req.path).map(({route}) => {
    return route;
  })
  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, context);
    res.send(content);
  })
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
