const modelHospital = require('./hospital.model')


exports.hospital_list = async function(req, res) {
    modelHospital.find({})    
        .then(doc => {
          res.json(doc)
        })
        .catch(err => {
          res.status(500).json(err)
        })
};

exports.delete_hospital = async function(req, res) {
    modelHospital.findOneAndRemove({
        codigo: req.params.codigo
      })
        .then(doc => {
          res.json(doc)
        })
        .catch(err => {
          res.status(500).json(err)
        })
};

exports.create_hospital = async function(req, res) {
    var hospital = new modelHospital(req.body);
    hospital.save()
        .then(doc =>{
            if(!doc || doc.length === 0) {
                return res.status(500).send(doc)
            }
            res.status(200).send(doc)
        })
        .catch(err =>{
            res.status(500).json(err)
        })
};

exports.update_hospital = async function(req, res) {
    modelHospital.findOneAndUpdate({
        codigo: req.params.codigo
      }, req.body, {
        new: true
      })
        .then(doc => {
          res.json(doc)
        })
        .catch(err => {
          res.status(500).json(err)
        })
};

exports.get_hospital = async function(req, res) {
    modelHospital.findOne({
        codigo: req.params.codigo
      })    
        .then(doc => {
          res.json(doc)
        })
        .catch(err => {
          res.status(500).json(err)
        })
};

