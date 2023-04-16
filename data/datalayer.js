const fs = require("fs");
const fichier = "./data/customers.json"; 



function testModify(user, idd) {
    // Lire le fichier customers.json et le parser en tant qu'objet JavaScript
    const users = JSON.parse(fs.readFileSync("./data/customers.json", 'utf8'));
  
    // Trouver l'utilisateur avec l'id 1235
    const userLocal = users.find(u => u.id === idd)
    userLocal.email = user.email;
    userLocal.first = user.first;
    userLocal.last = user.last;
    userLocal.company = user.company;
    userLocal.country = user.country;
  
    // Écrire les modifications dans le fichier customers.json
    fs.writeFileSync('./data/customers.json', JSON.stringify(users), 'utf8');
  }
  







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