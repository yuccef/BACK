const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/ajouter-client', (req, res) => {
  const nouveauClient = {
    id: req.body.id,
    email: req.body.email,
    first: req.body.first,
    last: req.body.last,
    company: req.body.company,
    created_at: req.body.created_at,
    country: req.body.country
  };

  const donnees = JSON.stringify(nouveauClient);

  fs.writeFile('users.json', donnees, function(erreur) {
    if (erreur) {
      console.log(erreur);
      res.sendStatus(500);
    } else {
      console.log('Données enregistrées avec succès !');
      res.sendStatus(200);
    }
  });
});

app.listen(3000, () => {
  console.log('Serveur démarré sur le port 3000');
});
