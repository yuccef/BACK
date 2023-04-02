const express = require("express");
const business = require("../Business/business");
const app = express();
const cors = require('cors');


const path = require('path');
app.use(express.static(path.join(__dirname, '/../public')));




//For the Data server use http://localhost:3001/api/customers
//For the Liste in internet server use http://localhost:3001/api/customers/liste




const apiServ = {
    start: function(port) {
        
        app.use(express.json());

        app.use(cors({
            origin: '*'
        }));

        app.get("/test", function(req, res){
            const testObj = {
                test: "test"
            };

            console.log("call done");
            res.json(testObj);
        });

        app.get("/api/customers", function(req, res){

            const number = req.query.number;
            const page = req.query.page;

            // get customers from business layer
            const resCustomers = business.getAllCustomers(number, page);

            res.json(resCustomers);
        });
        
           //Creating a NEW route where we can find liste.html
            app.get('/api/customers/liste', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/list.html'));
            });

             //Creating a NEW route where we can  Ajouter personne
             app.get('/api/customers/liste/add', function(req, res) {
                res.sendFile(path.join(__dirname, '/../Addclient/testt.html'));
                });

        //run
        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

module.exports = apiServ;






// const apiServ = {

//     start : function(port) {
//         app.listen(port, function(){ console.log("Serveur lancé sur le port " +port); });

//         app.use(express.static("Public"));

//         app.get("/api/customers",function(req,res){
//             const customers = business.getAllCustomers();
//             res.json(customers);
//         });
//     }
// };