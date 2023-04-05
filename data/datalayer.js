const fs = require("fs");
const fichier = "./data/customers.json"; 



/**dataLayer is a class that contains several methods for database manipulation */
let dataLayer = {



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