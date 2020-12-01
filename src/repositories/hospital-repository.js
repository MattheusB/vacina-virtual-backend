const mongoose = require('mongoose');
const modelHospital = mongoose.model('Hospital');

exports.list_hospital = async () => {
    const res = await modelHospital.find({}, 'cnes nome cidade estado uf cep -_id');
    return res;
};

exports.create_hospital = async data => {
    const hospital = new modelHospital(data);
    await hospital.save();
};

exports.delete_hospital = async id => {
    await modelHospital.findByIdAndDelete(id);
};

exports.get_hospital = async cnes => {
    const res = await modelHospital.findOne({cnes: cnes}, 'cnes nome cidade estado uf cep -_id');
    return res;
};

exports.update_hospital = async (id, data) => {
    await modelHospital.findByIdAndUpdate(id, {
        $set: data
    });
};

exports.delete_hospitais = async () => {
    await modelHospital.deleteMany({});
};