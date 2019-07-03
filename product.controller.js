// var mongoose = require("mongoose");
// var productSchema = require("./product.model");
var brandController = require("./brand.controller");

// mongoose.connect('mongodb://localhost:27017/ae2010veje06', { useNewUrlParser: true });


async function create(product, brand, Product, Brand) {

    var brand = {
        brand: brand
    };

    var brandCreated = await brandController.create(brand, Brand);

    product["brand"] = brandCreated._id;

    var productCreated = await Product.create(product)
        .then((data) => {
            console.log("Producto Guardado!!!");
            // console.log(data);
            return data;
        })
        .catch((error) => {
            console.log("Error!!!");
            // console.log(error);
            return error;
        });
    return productCreated;
}

async function findByPrice(priceToFind, Product) {

    var params = {
        price: priceToFind
    }

    var productFind = await Product.find(params)
        .populate("brand")
        .then((data) => {
            // console.log(data);
            return data;
        })
        .catch((err) => {
            console.log("Not found");
            return err;
        });

    return productFind;
}

module.exports.create = create;
module.exports.findByPrice = findByPrice;
