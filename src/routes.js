const express = require('express');
const router = express.Router();
// criando o nosso proimeiro endpoint

// importando os controllers
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping', (req, res) => { // traferir pra ca minha rota
    res.json({ pong: true });
});

// criando nassas rotas
// fazer login listar estatos e outros

router.use('/state', UserController.getStates);

router.post('/user/signin', AuthController.signin); // login
router.post('/user/signup', AuthController.signup); // autenticaçao

router.get('/user/me', UserController.info); // informaçao do proprio usuario
router.get('/user/me', UserController.editAction); // trocar a informçao do usuario

router.get('/categories', UserController.getCategories);// listar categorias

router.post('/ad/add', AdsController.AddAction); //adicionar anuncio novo
router.get('/ad/list', AdsController.getList); // lista lista de anuncios
router.get('/ad/item', AdsController.getItem); // informaçoes de anuncio especifico
router.post('/ad/:id', AdsController.editAction); // alterar o anuncio

module.exports = router;