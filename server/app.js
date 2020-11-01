const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('config');
const PORT = config.get('port') || 5005;
const mongoUri = config.get('mongoUri');

app.use(express.json());
app.use(express({ urlencoded: true }));
app.use('/api/register', require('./routes/register.routes'));

async function start() {
  try {
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  } catch (error) {
    console.log(error);
    process.exitCode = 1;
  }
};

start();
