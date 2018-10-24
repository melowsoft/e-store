//Import Products model
const Products = require("../models/products");

module.exports = function(app) {
  //GET Home Route
  app.get("/", (req, res) => {
    res.render("home");
  });

  //GET All Products Route
  app.get("/allproducts", (req, res) => {
    Products.find({}, (err, products) => {
      if (err) {
        console.log(err);
      } else {
        res.render("products", { products });
      }
    });
  });

  //GET New Product Route
  app.get("/product/new", (req, res) => {
    res.render("productform");
  });
};
