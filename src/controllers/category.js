const { categories, productCategories } = require("../../models");

const getAll = async (req, res) => {
  try {
    const response = await categories.findAll();
    res.send({
      statusCode: 200,
      message: "get category success",
      data: response,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

const create = async (req, res) => {
  try {
    const { name } = req.body;
    const response = await categories.create({
      name,
    });
    res.status(201).send({
      statusCode: 201,
      status: "success",
      message: "create category success",
      data: response,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

const addCategoriesToProduct = async (req, res) => {
  try {
    const { productId, categoryId } = req.body;
    const response = await productCategories.create({
      productId,
      categoryId,
    });
    res.status(200).send({
      statusCode: 200,
      status: "success",
      message: "create category success!",
      data: response,
    });
  } catch (err) {
    res.status(500).send({
      statusCode: 500,
      status: "Error",
      message: err.message,
    });
  }
};

const CategoryController = {
  getAll,
  create,
  addCategoriesToProduct,
};

module.exports = CategoryController;
