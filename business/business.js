const dataL = require("../data/datalayer");  /** Pick up methods from dataLayer */


const business = {

    /**To Delete a user form the  DataBase */
    deleteUser : function(user){
        let test = dataL.Del(user);
    },

    /**To Update the Data base */
     UpDater:function(data){
        console.log(data);
        return dataL.Up(data);
     },

    /**To Add a user */
    AddUser :function(data)  {
        console.log(data);
        return dataL.addUser(data);
    },

};


/**export the class to use it on other files */
module.exports = business;