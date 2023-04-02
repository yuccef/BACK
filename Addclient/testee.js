const fs = require('fs');

// Lecture du fichier JSON
const rawData = fs.readFileSync('donnees.json');
let utilisateurs = JSON.parse(rawData);


function enregistrerNouvelUtilisateur() {
  const formulaire = document.getElementById('idd'); // Remplacez 'mon-formulaire' par l'ID de votre formulaire

  const nouvelUtilisateur = {
    id: Math.floor(Math.random() * 10000000), // Génère un ID aléatoire
    email: formulaire.email.value,
    first: formulaire.prenom.value,
    last: formulaire.nom.value,
    company: formulaire.societe.value,
    created_at: new Date().toISOString(),
    country: formulaire.pays.value
  };

  console.log(nouvelUtilisateur); // Affiche le nouvel utilisateur dans la console
  // Ajoutez ici le code pour envoyer l'utilisateur au serveur ou faire autre chose avec les données

  formulaire.reset(); // Réinitialise le formulaire
}
utilisateurs.push(nouvelUtilisateur);
