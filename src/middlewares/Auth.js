const User = require("../models/User");

module.exports = {
    // ele é um middlele. fazer a verificação antes de continuar
    private: async (req, res, next) => {

        if (!req.query.token && !req.body.token) {
            res.json({ notallowed: true });
            return;
        }

        let token = ''; // verificou se mandou alguma coisa
        if (req.query.token) {
            token = req.query.token;
        }

        if (req.body.token) {
            token = req.body.token;
        }

        if (token == '') {// verificou se preencheu
            res.json({ notallowed: true });
            return;
        }

        const user = await User.findOne({ token });  // se preenchu ele vai verificar se o token é valido se esta salvo em algum lugar
        if (!user) {
            res.json({ notallowed: true });
            return;
        }
        next();
    }
}