const mongoose = require('mongoose'); // ele ja vai vir conficgurado
mongoose.Promise = global.Promise;

const modelSchema = new mongoose.Schema({
    name: String,
    email: String,
    state: String,
    passwordHash: String,
    token: String
});

const modelName = 'User'// cria uma constante com o memo nome do modulo

if (mongoose.connection && mongoose.connection.models[modelName]) {// verifica a conecxao e o modulo
    // exporta o proprio model que ja esta la
    module.exports = mongoose.connection.models[modelName];
} else {
    // caso ele nao tenha ele cria
    module.exports = mongoose.model(modelName, modelSchema);
}