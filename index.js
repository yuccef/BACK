const apiServ= require("./presentation/apiPres");
const express = require('express');
const app = express();
const port =3001;


function main(){
   
    apiServ.start(port);
}
main();






