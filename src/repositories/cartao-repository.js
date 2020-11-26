const mongoose = require('mongoose');
const { get_vacina_ID } = require('./vacina-repository');
const modelCartao = mongoose.model('Cartao');

exports.list_cartao = async () => {
    const res = await modelCartao.find({}, 'cnes nome cidade estado uf cep mention -_id');
    return res;
};

exports.create_cartao = async data => {
    const cartao = new modelCartao(data);
    await cartao.save();
};

exports.delete_cartao = async id => {
    await modelCartao.findByIdAndDelete(id);
};

exports.get_cartao = async sus => {
    const res = await modelCartao.findOne({sus: sus}, 'sus cpf nome nascimento vacinas -_id');
    return res;
};

exports.update_cartao = async (id, data) => {
    await modelCartao.findByIdAndUpdate(id, {
      $set: data
    });
};

exports.inserir_vacina = async (sus, codigo) => {
    const vacina_ref = get_vacina_ID(codigo).Schema.Types.ObjectID;
    this.get_cartao(sus).vacinas.push(vacina_ref);
};

exports.get_vacinas = async sus => {
    return this.get_cartao(sus).vacinas;
};