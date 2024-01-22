const app = require('express')();
require('./config/db')
const port = process.env.PORT ||5000;
const UserRouter=require('./api/User');

const bodyParser = require('express').json;


app.use(bodyParser());
app.use("/user",UserRouter);


app.listen(port,()=>{console.log(`server is running on port ${port}`);})