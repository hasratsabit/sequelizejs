const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRoute = require('./routes/api');
const db = require('./models/index');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// Static 
app.use(express.static('public'));

apiRoute(app, db);

db.sequelize.sync().then(() => {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`The app is running on port ${port}`);
  });
});
