const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage });

//Import Products model
const Products = require("../models/products");

//Import Detail model
const Detail = require("../models/detail");

module.exports = function(app) {
  //GET Home Route
  app.get("/", (req, res) => {
    Detail.find({}, (err, products) => {
      if (err) return console.log(err);

      res.render("home", { products });
    });
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

  //GET Detailed product route
  app.get("/product", (req, res) => {
    Detail.find({}, (err, detail) => {
      if (err) {
        console.log(err);
      } else {
        res.render("detail", { detail });
      }
    });
  });

  //GET New Product Route
  app.get("/product/new", (req, res) => {
    res.render("productform");
  });

  //POST New product route
  app.post("/product", upload.single("image"), (req, res) => {
    let name = req.body.name;
    let desc = req.body.desc;
    let price = req.body.price;
    let category = req.body.category;
    let image = req.file.path;
    let color = req.body.color;

    let product = new Detail({
      name,
      desc,
      price,
      category,
      image,
      color
    });
    console.log(product);

    product.save(err => {
      if (err) return console.log(err);

      res.redirect("/");
    });
  });

  //GET Preview Route
  app.get("/product/:id", (req, res) => {
    Detail.findById(req.params.id, (err, foundProduct) => {
      if (err) {
        res.redirect("/");
      } else {
        res.render("preview", { product: foundProduct });
      }
    });
  });
};
