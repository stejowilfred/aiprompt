const express=require('express');
const app=express();
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const PromtRoute=require('./Routes/PromtRoute')

dotenv.config();

mongoose.connect(`${process.env.MONGODB_URL}`)
  .then(() => console.log('db connected'))
  .catch((err) => console.log(err));

app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
  });

  app.use('/v1/promt',PromtRoute); 

  app.listen(process.env.PORT, () => {
    console.log('listening',process.env.PORT);
  });