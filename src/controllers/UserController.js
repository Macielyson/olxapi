const State = require('../models/State');

module.exports = {
    // os metodos que serao criados, referente ao usuario
    // todas elas vao ser funçoes assincronas
    // criando o nosso proimeiro endpoint
    getStates: async (req, res) => {
        let states = await State.find(); // pega todos os dados da lista
        res.json({ // e joga pra ca
            states: states
        });
    },
    info: async (req, res) => {

    },
    editAction: async (req, res) => {

    }
}