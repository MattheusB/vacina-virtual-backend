var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    /**username: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        unique: true
      },
    senha: {
        type: String,
        required: true,
        minlength: 6,
    },**/
    cnes: {
        type: String,
        required: true,
    },
    nome: {
        type: String,
        required: true,

    },
    cidade: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 2
    },
    cep: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 8
    }
})

var Hospital = mongoose.model('Hospital',hospitalSchema);

module.exports = Hospital; 