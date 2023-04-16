const express = require("express");
const business = require("../business/business");
const app = express();
const cors = require('cors');
const path = require('path');
app.use(express.static(path.join(__dirname, '/../public')));
const fs = require('fs');
const data = fs.readFileSync('./data/customers.json');
const customers = JSON.parse(data);


//For the Data server use http://localhost:3001/api/customers
//For the Liste in internet server use http://localhost:3001/api/customers/liste
//Add a user use (FRONT) http://localhost:3001/api/customers/liste/add
//Add a user use (BACK) http://localhost:3001/api/customers/add



const apiServ = {
    start: function(port) {
        
        app.use(express.json());

        app.use(cors({
            origin: '*'
        }));

        app.get('/api/customers', (req, res) => {
            res.json(customers);
          });
          
          app.get('/api/customers/:id', (req, res) => {
            const id = req.params.id;
            const customer = customers.find(c => c.id === Number(id));
            if (customer) {
              res.json(customer);
            } else {
              res.status(404).json({ message: 'Customer not found' });
            }
          });
          
          app.put('/api/customers/:id', (req, res) => {
            const id = req.params.id;
            const customer = customers.find(c => c.id === Number(id));
            if (customer) {
              customer.first = req.body.first;
              customer.last = req.body.last;
              customer.email = req.body.email;
              customer.company = req.body.company;
              customer.country = req.body.country;

              res.json(customer);
            } else {
              res.status(404).json({ message: 'Customer not found' });
            }
          });
          


        /**Creating a NEW route where we can push the data of the new user*/
        app.post('/api/customers/add', function(req, res) {
            business.AddUser(req.body);
            res.json(req.body);
            });

        
           //Creating a NEW route where we can find liste.html
            app.get('/api/customers/liste', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/list.html'));
            });


             //Creating a NEW route where we can  Ajouter personne
             app.get('/api/customers/liste/add', function(req, res) {
                res.sendFile(path.join(__dirname, '/../public/add.html'));
                    });

                    //Creating a NEW route where we can  Ajouter personne
                    app.get('/api/customers/liste/modify', function(req, res) {
                        res.sendFile(path.join(__dirname, '/../public/modify.html'));
                            });
                                   //Creating a NEW route where we can  Ajouter personne
                    app.get('/api/customers/liste/modify2', function(req, res) {
                        res.sendFile(path.join(__dirname, '/../public/modify2.html'));
                            });


                        


        //run
        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

module.exports = apiServ;




