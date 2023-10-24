const { profiles } = require("../../models");

const create = async (req, res) => {
  try {
    const { fullName, birthYear, address } = req.body;
    const createData = await profiles.create({
      fullName,
      birthYear,
      address,
    });
    res.status(201).send({
      statusCode: 201,
      status: "success",
      message: "create data profile success",
      data: createData,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

const getAll = async (req, res) => {
  try {
    const getData = await profiles.findAll();
    res.send({
      statusCode: 200,
      message: "get data profile success",
      data: getData,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

const getDetail = async (req, res) => {
  try {
    const { id } = req.params;
    const findOne = await profiles.findOne({
      where: { id: id },
    });
    if (!findOne) {
      return res.status(404).send({
        statusCode: 404,
        message: "profile not found!",
      });
    }

    res.status(200).send({
      statusCode: 200,
      status: "success",
      message: `get profile ${findOne.fullName} success`,
      data: findOne,
    });
  } catch (error) {
    res.status(500).send({
      statusCode: 500,
      message: error.message,
    });
  }
};

const ProfileController = {
  create,
  getAll,
  getDetail,
};

module.exports = ProfileController;
