const apiServ= require("./presentation/apiPres");
const express = require('express');
const app = express();
const port =3001;


function main(){
   
    apiServ.start(port);
}
main();



//For the Data server use http://localhost:3001/api/customers
//For the Liste in internet server use http://localhost:3001/api/customers/liste
//Add a user use (FRONT) http://localhost:3001/api/customers/liste/add
//Add a user use (BACK) http://localhost:3001/api/customers/add


