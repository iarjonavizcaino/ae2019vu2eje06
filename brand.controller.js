// var mongoose = require("mongoose");
// var brandSchema = require("./brand.model");

async function create(brand, Brand) {
    var brandCreated = await Brand.create(brand)
        .then((data) => {
            console.log("Marca Guardada!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return brandCreated;
}

module.exports.create = create;
