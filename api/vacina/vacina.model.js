var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var vacinaSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },

    nome: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        unique: true
      },
    
    dosagem: {
        type: Number,
        required: true,

    },

    
})

var Vacina = mongoose.model('Vacina',vacinaSchema);

module.exports = Vacina; 