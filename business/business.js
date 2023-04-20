const dataL = require("../data/datalayer");


const business = {


     UpDater:function(data){
        console.log(data);
        return dataL.Up(data);
     },

    /**to add a user */
    AddUser :function(data)  {
        //console.log("AddUser");
        console.log(data);
        return dataL.addUser(data);
    },


  
    getAllCustomers : function () {
        return dataL.getAllUsers();
    },



};

module.exports = business;