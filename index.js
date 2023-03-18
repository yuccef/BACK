const apiServ= require("./presentation/apiPres");
const express = require('express');
const app = express();
const port =3001;

function main(){
    app.use(express.static("public"));
    apiServ.start(port);
}
main();

