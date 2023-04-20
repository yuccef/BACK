const dataL = require("../data/datalayer");  /** Pick up methods of dataLayer */



const business = {
    
    /** method del function to delete a user form the  DataBase */
    deleteUser:function( data, id){
       console.log(data);
        return dataL.del(data,id);
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

    /**To get customers */
    getAllCustomers : function () {
        return dataL.getAllUsers();
    },

};


/**export the class to use it on other files */
module.exports = business;