var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSchema = new Schema({
    codigo:{
        type:String,
        required:true
    },

    username: {
        type: String,
        required: true,
        minlength: 6,
        trim: true,
        unique: true
      },
    
    cidade: {
        type: String,
        required: true,

    },

    uf:{
        type: String,
        required:true,
        minlength:2,
        maxlength:2
    }
    
})

var Hospital = mongoose.model('Hospital',hospitalSchema);

module.exports = Hospital;