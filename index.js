const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const port = 3000


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json());
app.use('/api',apiRouter)


app.listen(port,()=>{
    console.log('Server started successfully...');
})