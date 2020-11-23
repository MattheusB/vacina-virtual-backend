const mongoose = require('mongoose');
const modelCartao = mongoose.model('Cartao');


exports.cartao_list = function(req, res) {
    modelCartao.find({})
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err => {
        res.status(500).json(err)
    })
};

exports.delete_cartao = function(req, res) {
    modelCartao.findOneAndRemove({
        sus: req.params.sus
    })
    .then(doc => {
        res.status(200).json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
};

exports.create_cartao = function(req, res) {
    var cartao = new modelCartao(req.body);
    cartao.save()
    .then(doc =>{
        if (!doc || doc.length === 0){
            return res.status(500).send(doc)
        }
        res.status(200).send(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
};

exports.update_cartao = function(req, res) {
    modelCartao.findOneAndUpdate({
        sus: req.params.sus
    }, req.body,{
        new: true
    })
    .then(doc =>{
        res.status(200).json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
};

exports.get_cartao = function(req, res) {
    modelCartao.findOne({
        sus: req.params.sus
    })
    .then(doc =>{
        res.status(200).json(doc)
    })
    .catch(err =>{
        res.status(500).json(err)
    })
};
