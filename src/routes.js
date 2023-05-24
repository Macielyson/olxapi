const express = require('express');
const router = express.Router();


const Auth = require('./middlewares/Auth');

// importando os controllers
const AuthController = require('./controllers/AuthController');
const UserController = require('./controllers/UserController');
const AdsController = require('./controllers/AdsController');

router.get('/ping', (req, res) => { // traferir pra ca minha rota
    res.json({ pong: true });
});

// criando nassas rotas
// fazer login listar estatos e outros

// miffleware um codigo que vai rodar antes que a rota iniciar.
router.use('/state', /*Auth.private,*/ UserController.getStates);

router.post('/user/signin', AuthController.signin); // login
router.post('/user/signup', AuthController.signup); // autenticaçao

router.get('/user/me', Auth.private, UserController.info); // informaçao do proprio usuario
router.get('/user/me', Auth.private, UserController.editAction); // trocar a informçao do usuario

router.get('/categories', AdsController.getCategories);// listar categorias

router.post('/ad/add', Auth.private, AdsController.AddAction); //adicionar anuncio novo
router.get('/ad/list', AdsController.getList); // lista lista de anuncios
router.get('/ad/item', AdsController.getItem); // informaçoes de anuncio especifico
router.post('/ad/:id', Auth.private, AdsController.editAction); // alterar o anuncio

module.exports = router;