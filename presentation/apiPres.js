const express = require("express");
const app = express();
const cors = require('cors');
const path = require('path');
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

        /** Middleware pour le rafraîchissement de la page HTML */
        app.use(function(req, res, next) {
            res.setHeader('Cache-Control', 'no-cache');
            next();
        });

        app.get('/api/customers', (req, res) => {
            fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
            });
        });

        app.get('/api/customers/id/:id', (req, res) => {
            const id = req.params.id;
            const customer = customers.find(c => c.id === Number(id));
            if (customer) {
                res.json(customer);
            } else {
                res.status(404).json({ message: 'Customer not found' });
            }
        });

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

        app.delete('/api/customersDelete', (req, res) => {
            business.deleteUser(req.query.id);
            fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
            });
        });

        app.get('/api/customersDelete', (req, res) => {
            fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
            });
        });
        
        app.post('/api/customersAdd', (req, res) => {
            business.AddUser(req.body);
            fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
            });            
        });
              /** Route for All the DATA BASE*/
               app.get('/api/customersAdd', (req, res) => {
                fs.readFile('./data/customers.json', (err, data) => {
                res.json(customers);
              });
            });


            
        /**Server running on port */
        app.listen(port, function(){
            console.log("Server running on port " + port);
        });
    }
}

/**export the class to use it on other files */
module.exports = apiServ;




