const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');

const business = require("../business/business");
app.use(express.static(path.join(__dirname, '/../public')));


/** Pick up the dataBase*/
const fs = require('fs');
const data = fs.readFileSync('./data/customers.json');
const customers = JSON.parse(data);


/** Increase maximum size limit to 50*/
const bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));


/**apiServ  is a class that contains several methods for server manipulation */
const apiServ = {

    start: function(port) {
    
        app.use(express.json());

      
        app.use(cors({
            origin: '*'
        }));

      /** Route for All the DATA BASE*/
        app.get('/api/customers', (req, res) => {
            res.json(customers);
          });
        
 

        /**New routes for each ID wehre we can find  data of each customer by her ID*/
        app.get('/api/customers/id/:id', (req, res) => {
            const id = req.params.id;
            const customer = customers.find(c => c.id === Number(id));
            if (customer) {
              res.json(customer);
            } else {
              res.status(404).json({ message: 'Customer not found' });
            }
          });
          
          
        
        /**New route where we can push the data of the new user*/
        /**the PUT option is for Updating data in the server */
        app.put('/api/customers/id/:id', (req, res) => {
            const id = req.params.id;
            const customer = customers.find(c => c.id === Number(id));
            if (customer) {
              customer.first = req.body.first;
              customer.last = req.body.last;
              customer.email = req.body.email;
              customer.company = req.body.company;
              customer.country = req.body.country;

              business.UpDater(req.body);
              res.json(req.body);  

            } else {
              res.status(404).json({ message: 'Customer not found' });
            }
          });
          

        /**NEW route where we can push the data of new customer*/
        /**the POST option is for Adding data in the server */
        app.post('/api/customers/add', function(req, res) {
            business.AddUser(req.body);
            res.json(req.body);
            });

        
        /**New route to get the list of customers */
        app.get('/api/customers/liste', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/list.html'));
            });


        /**New route to Add a customers  */
        app.get('/api/customers/liste/add', function(req, res) {
                res.sendFile(path.join(__dirname, '/../public/add.html'));
                    });


        /**New route to modify a customer (Updates in data base) */
        app.get('/api/customers/liste/modify', function(req, res) {
                  res.sendFile(path.join(__dirname, '/../public/modify.html'));
                     });



        /**New route where we can Delete a customer from the data Base*/
        app.get('/api/customers/liste/delete', function(req, res) {
                   res.sendFile(path.join(__dirname, '/../public/delete.html'));
                   });


        /**New route where we can Delete a customer from the data Base*/
        /**the DELETE option is for Deleting data in the server */
         app.delete('/api/customers/id/:id', (req, res) => {
                     const id = req.params.id; 
                     business.deleteUser(req.body,id);
                     res.json(data);  
                  });
            

        /**Server running on port */
        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

/**export the class to use it on other files */
module.exports = apiServ;




