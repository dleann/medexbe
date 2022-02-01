const express = require("express");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    endpoint: "expedientes",
    updates: new Date(2022, 0, 22, 18, 41, 00),
  });
});
//Get/
router.post("/new", async (req, res) => {
  const {
    identidad,
    Fecha,
    Descripcion,
    Observacion,
    registros,
    UltimaActualizacion,
  } = req.body;
  res.status(200).json({
    status: "ok",
    recieved: {
      identidad,
      Fecha,
      Descripcion,
      Observacion,
      registros,
      UltimaActualizacion,
    },
  });
});
//POST/new

module.exports = router;
