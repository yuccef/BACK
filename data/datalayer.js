const fs = require("fs");
const fichier = "./data/customers.json"; 






/**dataLayer is a class that contains several methods for database manipulation */
let dataLayer = {


    Up :function(data){
   
        // Récupérer les données actuelles du fichier customers.json
        const customers = JSON.parse(fs.readFileSync("./data/customers.json", 'utf8'));
        
          // Récupérer les nouvelles données depuis le serveur
          fetch('http://localhost:3001/api/customers')
            .then(response => response.json())
            .then(newData => {
              // Mettre à jour les données existantes avec les nouvelles données
              newData.forEach(newCustomer => {
                const index = customers.findIndex(c => c.id === newCustomer.id);
                if (index !== -1) {
                  customers[index] = { ...customers[index], ...newCustomer };
                } else {
                  customers.push(newCustomer);
                }
              });
        
              // Écrire les nouvelles données dans le fichier customers.json
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





/**method to add new user in the data base  */
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

/**method to MODIFY user in the data base  */
modifyUser: function (data, userId , whatUpdate ,theUpdate ){
    const users = fs.readFileSync(fichier); 
    const tab= JSON.parse(users);
    const user = tab.find(user => user.id === userId);
    if (user) {
        user[whatUpdate] = theUpdate;
        fs.writeFileSync(fichier, JSON.stringify(tab));
        return user;
    } else {
        return null;
    }
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

/**export the class */
module.exports =dataLayer;