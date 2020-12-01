const mongoose = require('mongoose');
const modelVacina = mongoose.model('Vacina');

exports.list_vacina = async () => {
    const res = await modelVacina.find({}, 'codigo nome dosagem -_id');
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
    const res = await modelVacina.findOne({codigo: codigo}, 'codigo nome dosagem -_id');
    return res;
};

exports.get_vacina_ID = async codigo => {
    const res = await modelVacina.findOne({codigo: codigo});
    return res._id;
};

exports.get_vacina_COD = async id => {
    const res = await modelVacina.findOne({_id: id}, 'codigo -_id');
    return res.codigo;
};

exports.update_vacina = async (id, data) => {
    await modelVacina.findByIdAndUpdate(id, {
        $set: data
    });
};

exports.delete_vacinas = async () => {
    await modelVacina.deleteMany({});
};