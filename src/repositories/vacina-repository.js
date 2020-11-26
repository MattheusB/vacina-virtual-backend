const mongoose = require('mongoose');
const modelVacina = mongoose.model('Vacina');

exports.list_vacina = async () => {
    const res = await modelVacina.find({}, 'cnes nome cidade estado uf cep mention -_id');
    return res;
};

exports.create_vacina = async data => {
    const vacina = new modelVacina(data);
    await vacina.save();
};

exports.delete_vacina = async id => {
    await modelVacina.findByIdAndDelete(id);
};

exports.get_vacina = async codigo => {
    const res = await modelVacina.findOne({codigo: codigo}, 'codifo nome dosagem -_id');
    return res;
};

exports.get_vacina_ID = async codigo => {
    const res = await this.get_vacina(codigo);
    return res.Schema.Types.ObjectId();
};

exports.update_vacina = async (id, data) => {
    await modelVacina.findByIdAndUpdate(id, {
      $set: data
    });
};