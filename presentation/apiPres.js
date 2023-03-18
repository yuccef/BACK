const express = require("express");
const business = require("../Business/business");
const app = express();
const cors = require('cors');

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
            // const customers = business.getAllCustomers();
            const resCustomers = business.getAllCustomers(number, page);

            // res.json(customers);
            res.json(resCustomers);
        });

        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

module.exports = apiServ;