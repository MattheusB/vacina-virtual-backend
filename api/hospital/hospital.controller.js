const modelHospital = require('./hospital.model')



exports.hospital_list = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET: função para pegar hospitais')
};

exports.delete_hospital = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

exports.create_hospital = function(req, res) {
    console.log(req.body.codigo)

    const hospital = new modelHospital({
        codigo: req.body.codigo,
        username: req.body.username,
        cidade: req.body.cidade,
        uf: req.body.uf
    })

    try{
        const newHospital =  hospital.save()
        res.status(201).json(newHospital)
    } catch(error){
        return res.status(500).send(error)
    }
};

exports.update_hospital = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

exports.get_hospital = function(req, res) {
    return res.status(200).send('NOT IMPLEMENTED YET')
};

