const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const customers = [
  {
    id: 11,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com'
  },
  {
    id: 12,
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com'
  }
];

app.use(bodyParser.json());
app.use(cors());

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
    customer.firstName = req.body.firstName;
    customer.lastName = req.body.lastName;
    customer.email = req.body.email;
    res.json(customer);
  } else {
    res.status(404).json({ message: 'Customer not found' });
  }
});

const port = 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});