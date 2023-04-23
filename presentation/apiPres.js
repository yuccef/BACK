const express = require("express");
const cors = require('cors');
const path = require('path');
const chokidar = require('chokidar');
const axios = require('axios');

const app = express();

const business = require("../business/business");

const fs = require('fs');
const data = fs.readFileSync('./data/customers.json');
const customers = JSON.parse(data);

const bodyParser = require('body-parser');


app.use(express.static(path.join(__dirname, '/../public')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

const apiServ = {

    start: function(port) {
    
        app.use(express.json());
        app.use(cors({
            origin: '*'
        }));


        /**Create a route to Get the data of all users */
        app.get('/api/customers', (req, res) => {
            fs.readFile('./data/customers.json', (err, data) => {
                if (err) {
                    console.error(err);
                    return res.sendStatus(500);
                }
                res.json(JSON.parse(data));
            });
        });

        
        /**Create a route to Get the data for each user */
        app.get('/api/customers/id/:id', (req, res) => {
            const id = req.params.id;
            const customer = customers.find(c => c.id === Number(id));
            if (customer) {
                res.json(customer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        });


        const customersWatcher = chokidar.watch('./data/customers.json');
        customersWatcher.on('change', (path) => {
            console.log(`File ${path} has been changed`); 
            /**Read the modified JSON file */
            fs.readFile(path, (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }
                /**Refresh API server database*/
                const customers = JSON.parse(data);
                /**Code to refresh API server database here */
            });
        });




       /**Create a route for Updating a user */
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

                        /**Send a request to update the local database */
                        axios.put(`http://localhost:3001/api/customers/${id}`, req.body)
                            .then(() => {
                                res.json(req.body);
                            })
                            .catch((err) => {
                                console.error(err);
                                res.sendStatus(500);
                            });
                    } else {
                        res.status(404).json({ message: 'Customer not found' });
                    }
            });



        /**Create a route for Updating a user */
        /**the PUT option is for Updating data in the server */
        app.put('/api/customers/:id', (req, res) => {
            const id = req.params.id;
            const customerIndex = customers.findIndex(c => c.id === Number(id));
            if (customerIndex !== -1) {
                customers[customerIndex] = {
                    id: Number(id),
                    first: req.body.first,
                    last: req.body.last,
                    email: req.body.email,
                    company: req.body.company,
                    country: req.body.country,
                };

               /**Write Updates in local JSON file */
                fs.writeFile('./data/customers.json', JSON.stringify(customers), (err) => {
                    if (err) {
                        console.error(err);
                        return res.sendStatus(500);
                    }
                    res.sendStatus(200);
                });
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        });




       /**Create a route for Deleting a user */
       /**the DELETE option is for Deleting data in the server */
        app.delete('/api/customers', (req, res) => {
            business.deleteUser(req.query.id);
            fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
            });
        });

        


       /**Create a route for Adding a user */
       /**the POST option is for Adding data in the server */
        app.post('/api/customers', (req, res) => {
            business.AddUser(req.body);
            fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
            });            
        });





        /**Created routes to return html files where each file corresponds to an operation */
        app.get('/api/customers/liste', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/list.html'));
        });

        app.get('/api/customers/liste/add', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/add.html'));
        });

        app.get('/api/customers/liste/modify', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/modify.html'));
        });

        app.get('/api/customers/liste/delete', function(req, res) {
            res.sendFile(path.join(__dirname, '/../public/delete.html'));
        });


            
        /**Server running on port */
        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}




/**export the class to use it on other files */
module.exports = apiServ;




