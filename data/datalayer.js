const fs = require("fs");

const fichier = "./data/customers.json";

let dataLayer = {

    getAllUsers : function (){
        const users = fs.readFileSync(fichier);
        const tableau = JSON.parse(users);
        return tableau;
    },


    getUsers : function (number, page) {
        {

         //read json file
         let test =fs.readFileSync(fichier);

         //parse to object 
         let tableau = JSON.parse(test);

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



module.exports =dataLayer;