
const mongoose = require('mongoose');
const config = require('../config/dev');
const fakeDb = require('./FakeDb');

mongoose.connect(config.DB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, async () => {
  console.log('Populating DB......');
  await fakeDb.populate();
  await mongoose.connection.close();
  console.log('DB populated.');
})