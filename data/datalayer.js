const fs = require("fs");
const proc = require("process");

const filename ="./data/customers.json";

let dataLayer = {

    getAllCustomers : function() {
        const data = fs.readFileSync(filename);
        const customers = JSON.parse(data);
        return customers;
    },

    getCustomers : function(number, page) {
        // Read json file
        let rawdata = fs.readFileSync(filename);

        // Parse to object
        let customers = JSON.parse(rawdata);

        const total = customers.length;

        // Filter by number and page
        if(number && page){
            customers = customers.slice((page - 1) * number, page);
        }

        // Create object with total count and result
        const result = {
            total : total,
            result : customers
        };

        return result;
    }
}

module.exports = dataLayer;