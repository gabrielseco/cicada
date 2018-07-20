import express from 'express';
import bodyParser from 'body-parser';
import {
  PropertiesById,
  Properties,
} from './spotaroom';

const APP_PORT = process.env.PORT || 4000;
const app = express();

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());
app.use('/', express.static('public'));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') {
    res.end();
  }
  next();
});

app.get('/properties-by-id/:city', PropertiesById);

app.get('/properties', Properties);

app.get('*', (req, res) => {
  res.status(404).json({
    message: 'Route does not exist',
  });
});

app.listen(APP_PORT, () => {
  console.log(`App listening on port ${APP_PORT}`); // eslint-disable-line no-console
});
