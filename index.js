"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
*/

const express = require("express");
const app = express();

/* ------------------------------------------------------- */
//^ Required Modules

//* envVariables to process.env
require("dotenv").config();
const PORT = process.env.PORT || 8000;

//* asyncErrors to errorHandler
require("express-async-errors");

/* -------------------------------------------------------
                 Configurations
------------------------------------------------------- */

//! Database connection
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* -------------------------------------------------------
                 Middlewares
------------------------------------------------------- */
//* accept json
app.use(express.json());

//* Filter,Search, Sort, Pagination (res.getModelList)
app.use(require("./src/middlewares/findSearchSortPagi"));

/* -------------------------------------------------------
                 Routes
------------------------------------------------------- */
app.all("/", (req, res) => {
  res.send("<h1>Welcome to Personnel API</h1>");
});

app.use("/departments", require("./src/routes/department.router"));
app.use("/personnels", require("./src/routes/personnel.router"));

//* eslesmeyen routelari yakalar => Not Found sayfasi
app.use((req, res, next) => {
  res.status(404).send({
    error: true,
    message: "Route not found",
  });
  next();
});

/* ------------------------------------------------------- */

// errorHandler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* ------------------------------------------------------- */
