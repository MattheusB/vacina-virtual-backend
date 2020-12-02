const mongoose = require('mongoose');
const repository = require('./vacina-repository');
const modelCartao = mongoose.model('Cartao');

exports.list_cartao = async () => {
    const res = await modelCartao.find({}, 'sus cpf nome nascimento vacinas _id');
    for (let i = 0; i < res.length; i++) {
        await this.list_vacinas(res[i])
    }
    return res;
};

exports.create_cartao = async data => {
    const cartao = new modelCartao(data);
    await cartao.save();
};

exports.delete_cartao = async id => {
    await modelCartao.findByIdAndDelete(id);
};

exports.get_cartao = async id => {
    const res = await modelCartao.findById(id, 'sus cpf nome nascimento vacinas _id');
    await this.list_vacinas(res);
    return res;
};

exports.update_cartao = async (id, data) => {
    await modelCartao.findByIdAndUpdate(id, {
        $set: data
    });
};

exports.inserir_vacina = async (sus, codigo) => {
    const vacina_ref = await repository.get_vacina_Id(codigo);
    await modelCartao.findOneAndUpdate({sus: sus}, { $push: { vacinas: vacina_ref }})
};

exports.list_vacinas = async res => {
    for (let i = 0; i < res.vacinas.length; i++) {
        const codigo = await repository.get_vacina_Codigo(res.vacinas[i]);
        res.vacinas[i] = codigo;
    }
};

exports.delete_cartoes = async () => {
    await modelCartao.deleteMany({});
};