const mongoose = require('mongoose');
const {
  db: { host, user, password, db },
} = require(`../environments/env.${process.env.NODE_ENV}`);

mongoose
  .connect(`mongodb+srv://${user}:${password}@${host}/${db}?retryWrites=true&w=majority`)
  .then(() => console.log('Connected to DB !'));
