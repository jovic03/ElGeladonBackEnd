const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');

const express = require('express');
const router = express.Router();//ajuda criar rotas dentro do arquivo

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocument));

const {validId,
    validObjectBody} = require('../middlewares/paleta.middleware');

const paletasController = require('../controllers/paletas.controller');

//rota para listar paletas (no primeiro todos e no segundo pelo id especifico)
router.get('/all-paletas',paletasController.findPaletasController);

//rota para listar uma paleta por ID
router.get('/one-paleta/:id',validId, paletasController.findPaletaByIdController);

//rota para criar paleta--por ele receber json ele precisa do middleware
router.post('/create-paleta',validObjectBody,paletasController.createPaletaController);

// Usaremos o PUT para atualizar todo o recurso, o PATCH pode ser usado para atualizar partes de um registro
router.put('/update-paleta/:id',validId,validObjectBody, paletasController.updatePaletaController);

//rota para deletar paleta pelo id--por ele receber json ele precisa do middleware
router.delete('/delete-paleta/:id',validId,paletasController.deletePaletaController);

//cria um dado e substitui por um novo-- usaremos o put para atualizar todo o recurso, p tach pode ser usado para atualizar parte de um registro
//router.put('/update/:id',paletasController.updatePaletaController);

module.exports = router;