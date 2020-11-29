var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cartaoSchema = new Schema({
    sus: {
        type: String,
        minlength: 15,
        maxlength: 15,
        required: true
    },
    cpf: {
        type: String,
        minlength: 11,
        maxlength: 11,
        required: true
    },
    nome: {
        type: String,
        required: true,
    },
    nascimento: {
        type: String,
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