const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const UserRoutes = require('./routes/userRoute');

dotenv.config({path: './config.env'});

const DB = process.env.DB

mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('DB connection successful!'))
  .catch(err => console.log(`DB connection failed! ${err}`))

const PORT = process.env.PORT || 8000

//Parse JSON Objects
app.use(express.json());

//Endpoints
app.use('/api/users', UserRoutes);

app.listen(PORT, () => {
  console.log(`running app on port ${PORT}`);
})
