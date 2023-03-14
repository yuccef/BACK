var express = require("express");
const business = require("../business/business");
var app = express();

const apiPres = {

    start:function(port){

        app.use(express.json());

        app.get("/test", function(req, res){
            const testObj ={
                test: "test"
            };
            res.json(testObj);
        });

        app.get("/api/customers", function(req, res) {
            const number = req.query.number;
            const page = req.query.page;

            const customers = business.getCustomers(number, page);

            res.json(customers);
        });

        app.listen(port, function(){
            console.log("Server running on port " + port);
    });
    }
}


module.exports = apiPres;