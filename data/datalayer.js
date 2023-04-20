const fs = require("fs");
const fichier = "./data/customers.json";  /**To get the Data Base */




/**dataLayer is a class that contains several methods for database manipulation */
let dataLayer = {


    del: function(data, id) {
        const fs = require('fs');
      
        const customers = JSON.parse(fs.readFileSync("./data/customers.json", 'utf8'));
      
        // Recherche de l'index de l'utilisateur avec l'ID correspondant
        const index = customers.findIndex(c => c.id === id.toString());
      
        if (index === -1) {
          console.log(`Aucun utilisateur trouvé avec l'ID ${id}.`);
          return customers;
        }
      
        // Suppression de l'utilisateur
        customers.splice(index, 1);
      
        // Décrémentation des ID des utilisateurs suivants
        for (let i = index + 1; i < customers.length; i++) {
          customers[i].id = customers[i].id - 1;
        }
      
        // Sauvegarde des modifications apportées au fichier JSON
        fs.writeFile("./data/customers.json", JSON.stringify(customers), (err) => {
          if (err) {
            console.log("Une erreur s'est produite lors de la sauvegarde des données.");
            console.log(err);
          } else {
            console.log(`L'utilisateur avec l'ID ${id} a été supprimé.`);
          }
        });
      
        // Retourne les données modifiées
        return customers;
      },
      

/** method Up function to Modify DataBase */
    Up :function(data){
   
        //Get current data from clients.json file
        const customers = JSON.parse(fs.readFileSync("./data/customers.json", 'utf8'));
        
          // Get new data from server
            fetch('http://localhost:3001/api/customers')
            .then(response => response.json())
            .then(newData => {

              // Update existing data with new data
              newData.forEach(newCustomer => {
                const index = customers.findIndex(c => c.id === newCustomer.id);
                if (index !== -1) {
                  customers[index] = { ...customers[index], ...newCustomer };
                } else {
                  customers.push(newCustomer);
                }
              });
        
              // Write the new data in customers.json file
              fs.writeFile('./data/customers.json', JSON.stringify(customers), err => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log('Les données ont été mises à jour dans le fichier customers.json');
              });
            })
            .catch(error => console.error(error));
     
        
    },


/** method addUser function to add a user on DataBase */
    addUser: function (data){
        const users = fs.readFileSync(fichier); 
        const tab= JSON.parse(users);
        tab.push(data);
        var newdata = JSON.stringify(tab);
        fs.writeFile("./data/customers.json", newdata, err => {
            // error checking
            if(err) throw err;
            
            console.log("Utilisateur ajouté");
        });
    },

/**FOR PAGINATION  */

    /**method to return all Users */
    getAllUsers : function (){
        const users = fs.readFileSync(fichier);
        const tableau = JSON.parse(users);
        return tableau;
    },


    /**method to return a specific part of Users */
    getUsers : function (number, page) {
        {

         let test =fs.readFileSync(fichier);          //read json file
         let tableau = JSON.parse(test);         //parse to object 
         const total = tableau.length;

         //filter by number and page
         if(number && page){
            tableau = tableau.slice((page- 1) * number, page* number);
         }
         
         //create object with total count and result
         const result ={
            total: total,
            result: tableau

         };
         
         //return customers
         return result;

        }
    }

};


/**export the class to use it on other files */
module.exports =dataLayer;