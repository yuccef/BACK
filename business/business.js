const dataL = require("../data/datalayer");


const defaultNumber=10;
const defaultPage= 1;
const maxNumber =100;


const business = {

    /**to add a user */
    AddUser :function(data)  {
        //console.log("AddUser");
        console.log(data);
        return dataL.addUser(data);
    },



    getAllCustomers : function () {
        return dataL.getAllUsers();
    },


    getCustomers : function(number, page) {

        //check params
        if(number == undefined || page== undefined) {
            number = defaultNumber;
            page= defaultPage;
        }

        if(number> maxNumber ){
            number - maxNumber;
        }

        //get data from dataL
        const resCustomers = dataL.getUsers(number,page);

        resCustomers.page = page;
        resCustomers.numberByPage = number;
        resCustomers.totalPages = Math.ceil(resCustomers.total/ number);

        //return customers
        return resCustomers

        
    },
};

module.exports = business;