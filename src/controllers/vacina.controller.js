const mongoose = require('mongoose');
const modelVacina = mongoose.model('Vacina');


exports.lista_vacina = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET: função para pegar hospitais')
};

exports.remove_vacina = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

exports.cria_vacina = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

exports.atualiza_vacina = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

exports.retorna_vacina = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

