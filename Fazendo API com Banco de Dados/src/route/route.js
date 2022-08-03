const express = require('express');

const route = express.Router();

route.use(express.json())
const userController = require('../controller/userController')




// -------------------------Rotas-------------------------
route.get('/all',userController.getAllUser);

route.post('/usuarios/login',userController.postCheckPassoword );

route.post('/usuarios',userController.postNewUser);

route.put('/usuarios/:email',userController.putChangeUser);

route.delete('/usuarios/:email',userController.deleteUser);

// -------------------------------------------------------

module.exports = route;