const express = require("express");
const router = require("./src/routes");
const app = express();
require("dotenv").config();

const port = process.env.APP_PORT || 4000;
const host = process.env.APP_HOST;

app.use(express.json());
app.get("/", async (req, res) => {
  res.status(200).send({
    statusCode: 200,
    message: "hallo api muhsyie toko",
  });
});

app.use("/api/v1", router);

app.listen(port, () => console.log(`Running on ${host}:${port} `));
