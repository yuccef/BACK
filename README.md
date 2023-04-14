Introduction

This project is a web application that allows users to manage a list of customers. It provides functionalities to display the list of customers, add new customers, and modify existing ones.
Getting started
Installation

To install the project, you need to clone the repository from Github or Gitlab.

bash

git clone https://github.com/your-username/your-repository.git

Then, you need to install the project dependencies using npm.

bash

npm install

Usage

To start the web server, you need to run the following command.

bash

npm start

The web server will start listening on port 3001. You can access the application by visiting http://localhost:3001.
Functionnalities
Displaying the list of customers

To display the list of customers, you can access the following URL: http://localhost:3001/api/customers/liste. It will return a JSON array of all the customers.
Adding a new customer

To add a new customer, you can access the following URL: http://localhost:3001/api/customers/add. You will need to submit a POST request with the following parameters:

    email (string, required): the email address of the customer
    first (string, required): the first name of the customer
    last (string, required): the last name of the customer
    company (string, required): the name of the company of the customer
    country (string, required): the country of the customer

The server will generate an id and a creation date automatically.
Modifying a customer

To modify an existing customer, you can access the following URL: http://localhost:3001/api/customers/:id, where :id is the id of the customer you want to modify. You will need to submit a PUT request with the following parameters:

    email (string, required): the email address of the customer
    first (string, required): the first name of the customer
    last (string, required): the last name of the customer
    company (string, required): the name of the company of the customer
    country (string, required): the country of the customer

Development
Project structure

The project is structured as follows:

    index.js: the entry point of the application
    routes/customers.js: the routes for the customers API
    data/customers.json: the JSON file containing the list of customers

Coding style

The project follows the Airbnb JavaScript style guide. ESLint is used to enforce this style guide. You can run ESLint by running the following command.

bash

npm run lint

Conclusion

This project provides basic functionalities to manage a list of customers. It can be extended to add more features and to make it more user-friendly.