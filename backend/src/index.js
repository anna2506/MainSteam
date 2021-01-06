const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');
const upload = require('express-fileupload');

const app = express();
const port = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(upload());
app.listen(port, () => {
  routes(app);
  // eslint-disable-next-line no-console
  console.log(`App running on port ${port}.`);
});
