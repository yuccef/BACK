const fs = require("fs");
const fichier = "./data/customers.json";  /**To get the Data Base */




/**dataLayer is a class that contains several methods for database manipulation */
let dataLayer = {

    /** method del function to delete a user form the  DataBase */
    Del : function(data){
        //get data from json file
        const users = fs.readFileSync(fichier);
        //parse to object
        let newCustomer = JSON.parse(users);
        //findIndex permet de retrouver un user en fonction du param removeuser
        const index = newCustomer.findIndex(user => user.id === parseInt(data));
        
        if (index != -1) {
            //puis de le retirer s'il existe 
            newCustomer.splice(index, 1);
            //et de reecrire le fichier
            fs.writeFileSync(fichier, JSON.stringify(newCustomer, null, 2));
            console.log("Utilisateur supprimé .");
            return 1;
        } else 
        console.log("Utilisateur non trouvé .");
          return 0;        
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
};


/**export the class to use it on other files */
module.exports =dataLayer;