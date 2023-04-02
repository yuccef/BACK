const fs = require('fs');

// Lecture du fichier JSON
const rawData = fs.readFileSync('donnees.json');
let data = JSON.parse(rawData);




// Ajout du nouveau client
const nouveauClient = {
  "id": 222222,
  "email": "yregtrfg",
  "first": "yuccef",
  "last": "rfedd",
  "company": "orio",
  "created_at": "2002-11-10T00:00:00.000Z",
  "country": "morocco"
};

tab.push(nouveauClient);
var newdata = JSON.stringify(tab);
fs.writeFile("users.json", newdata, err => {
    // error checking
    if(err) throw err;
    
    console.log("Utilisateur ajouté");
});




// app.use(bodyParser.json());

// // Route HTTP POST pour enregistrer les nouvelles données utilisateur
// app.post('/utilisateurs', (req, res) => {
//   const nouvelUtilisateur = {
//     id: Math.floor(Math.random() * 10000000),
//     email: req.body.email,
//     first: req.body.prenom,
//     last: req.body.nom,
//     company: req.body.societe,
//     created_at: new Date().toISOString(),
//     country: req.body.pays
//   };

//   // Lecture du fichier JSON existant
//   fs.readFile('donnees.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send('Erreur du serveur');
//       return;
//     }

//     let utilisateurs = JSON.parse(data);

//     // Ajout du nouvel utilisateur
//     utilisateurs.push(nouvelUtilisateur);

//     // Écriture des données mises à jour dans le fichier JSON
//     fs.writeFile('donnees.json', JSON.stringify(utilisateurs), (err) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Erreur du serveur');
//         return;
//       }

//       // Réponse de réussite à la requête
//       res.status(201).send('Nouvel utilisateur enregistré');
//     });
//   });
// });

// // Lancement du serveur Node.js
// app.listen(port, () => {
//   console.log(`Serveur lancé sur le port ${port}`);
// });
