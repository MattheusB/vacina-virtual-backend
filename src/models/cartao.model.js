var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartaoSchema = new Schema({
    sus: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true
    },
    nome: {
        type: String,
        required: true,
        unique: true
    },
    nascimento: {
        type: Date,
        required: true,
    },
    vacinas: [{
        type: Schema.Types.ObjectId,
        ref: 'Vacina',
        required: false,
    }]       
})

var Cartao = mongoose.model('Cartao',cartaoSchema);

module.exports = Cartao;