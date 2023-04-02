const apiServ= require("./presentation/apiPres");
const express = require('express');
const app = express();
const port =3001;

function main(){
    app.use(express.static('public'));
    app.use(express.static('Addclient'));

    apiServ.start(port);
}
main();



//For the Data server use http://localhost:3001/api/customers
//For the Liste in internet server use http://localhost:3001/api/customers/liste
//to add a user  http://localhost:3001/api/customers/liste/add

