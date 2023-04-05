const express = require('express');
const bodyParser = require('body-parser');
const business = require("../business/business");
const app = express();
app.use(bodyParser.json());

const ADDFRONT ={

AddUserFront :function (req)  {

  const userData = {
    id : req.body.id,
    email: req.body.email,
    first: req.body.first,
    last: req.body.last,
    company: req.body.company,
    country: req.body.country,
    created_at: new Date().toISOString().slice(0, 10)
  };

  console.log("test");
  console.log(userData);

 return userData;
}}




module.exports = ADDFRONT   ;