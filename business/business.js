const dal = require("../data/dataLayer");
const _ = require("underscore");

const defaultNumber = 10;
const defaultPage = 1;
const maxNumber = 130;

const business = {
    getAllCustomers : function() {
        return dal.getAllCustomers();
    },

    getCustomers : function(number, page) {
        //check param
        if(number == undefined || page == undefined){
            number = defaultNumber;
            page = defaultPage;
        }

        if(number > maxNumber)
            number = maxNumber;

        // get data from DAL
        const resCustomers = dal.getCustomers(number, page);
        
        resCustomers.page = page;
        resCustomers.numberByPage = number;
        resCustomers.totalPages = Math.ceil(resCustomers.total /number);

        return resCustomers;
    }
}

module.exports = business;