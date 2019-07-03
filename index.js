const productController = require("./product.controller");
var mongoose = require("mongoose");
var brandSchema = require("./brand.model");
var productSchema = require("./product.model");

mongoose.connect('mongodb://localhost:27017/ae2010veje06', { useNewUrlParser: true });
var Brand = mongoose.model('Brand', brandSchema, 'brands');
var Product = mongoose.model('Product', productSchema, 'products');

async function createBrandAndProduct() {
    var product = {
        name: "MacBook Air",
        price: 100,
        cost: 50
    };
    
    const brand = "Apple";
    
    var productCreated = await productController.create(product, brand, Product, Brand);
    console.log("------- Producto Creado --------");
    console.log(productCreated);
}

async function findProduct(price) {
    var productPrice = await productController.findByPrice(price, Product)
    console.log("------- Productos Encontrado --------");

    console.log(productPrice);
}
 
createBrandAndProduct();
findProduct(100);











