const dataL = require("../data/datalayer");  /** Pick up methods of dataLayer */



const business = {


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