"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                Documentation                               */
/* -------------------------------------------------------------------------- */
// https://swagger-autogen.github.io/docs/
// $ npm i swagger-autogen
// $ npm i swagger-ui-express
// $ npm i redoc-express

//! SWAGGER & Redoc
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../swagger.json");
const redoc = require("redoc-express");

const options = {
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui.css",
  swaggerOptions: { persistAuthorization: true },
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/5.0.0/swagger-ui-standalone-preset.js",
  ],
}; //* vercel swagger sürümden kaynakli dogrudan cekemiyor. O nedenle cdn linklerini bagladik.

//* URL => /documents
//* JSON
router.use("/json", (req, res) => {
  res.sendFile("swagger.json", { root: "." });
});

//? REDOC
router.use(
  "/redoc",
  redoc({
    title: "Personnel Api",
    specUrl: "/documents/json",
  })
);
router.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(require("../../swagger.json"), options)
);

module.exports = router;
