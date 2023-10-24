const express = require("express");
const ProductController = require("../controllers/product");
const CategoryController = require("../controllers/category");
const UserController = require("../controllers/user");
const ProfileController = require("../controllers/profile");
const route = express.Router();

route.get("/products", ProductController.getAll);
route.get("/product/:id", ProductController.getDetail);
route.post("/product", ProductController.create);
route.delete("/product/:id", ProductController.deleteData);
route.put("/product/:id", ProductController.updateData);

route.get("/categories", CategoryController.getAll);
route.post("/category", CategoryController.create);
route.post("/category/product", CategoryController.addCategoriesToProduct);

route.post("/register", UserController.register);
route.post("/login", UserController.login);

route.post("/profile", ProfileController.create);
route.get("/profiles", ProfileController.getAll);
route.get("/profile/:id", ProfileController.getDetail);

module.exports = route;
