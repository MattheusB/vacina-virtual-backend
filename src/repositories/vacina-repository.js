const mongoose = require('mongoose');
const modelVacina = mongoose.model('Vacina');

exports.list_vacina = async () => {
    const res = await modelVacina.find({}, 'codigo nome dosagem _id');
    return res;
};

exports.create_vacina = async data => {
    const vacina = new modelVacina(data);
    await vacina.save();
};

exports.delete_vacina = async id => {
    await modelVacina.findByIdAndDelete(id);
};

exports.get_vacina = async id => {
    const res = await modelVacina.findById(id, 'codigo nome dosagem _id');
    return res;
};

exports.get_vacina_Id = async codigo => {
    const res = await modelVacina.findOne({codigo: codigo}, '_id');
    return res._id;
};

exports.get_vacina_Codigo = async id => {
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