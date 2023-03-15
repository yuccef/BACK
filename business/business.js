const dataL = require("../data/datalayer");

const business = {
    
    getAllCustomers : function () {
        return dataL.getAllUsers();
    }
};

module.exports = business;