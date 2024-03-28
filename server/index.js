const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Cors = require('cors');
const patterns = require('./Controllers/pattern')
require('dotenv').config();

app.use(Cors());
app.get('/api/get-patterns',patterns.getPatterns)

app.listen(process.env.PORT,(req,res)=>{
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
})