const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express();
const UserRouter = require('./routes/userRoute');
const ProductRouter = require('./routes/productRoute');
const CartRouter = require('./routes/cartRoute');
const OrderRouter = require('./routes/orderRoute');
const AuthRouter = require('./routes/authRoute');

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
app.use('/api/users', UserRouter);
app.use('/api/products', ProductRouter);
app.use('/api/carts', CartRouter);
app.use('/api/orders', OrderRouter);
app.use('/api/auth', AuthRouter);
app.use('*', (req, res) => {
  return res.status(404).json({message: "This route does not exist"});
})

app.listen(PORT, () => {
  console.log(`running app on port ${PORT}`);
})
