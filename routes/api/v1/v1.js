const express = require('express');
const { verifyApiHeaderToken } = require('./headerVerifyMiddleware');
const router = express.Router();
const pacientesRoutes = require('./pacientes/pacientes');
const expedientesRoutes = require('./expedientes/expedientes');
//middlewares
router.use(
    '/pacientes',
    verifyApiHeaderToken, 
    pacientesRoutes
);
router.use('/expedientes', expedientesRoutes);
module.exports = router;
