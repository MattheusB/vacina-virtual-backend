const repository = require('../repositories/hospital-repository');


exports.list_hospital = async function(req, res) {
  try {
    const data = await repository.list_hospital();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar os Hospitais.'});
  }
};

exports.delete_hospital = async function(req, res) {
  try {
    await repository.delete_hospital(req.params.id);
    res.status(200).send({
      message: 'Hospital removido com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao remover o hospital.'});
  }
};

exports.create_hospital = async function(req, res) {
  try {
    await repository.create_hospital(req.body);

    res.status(201).send({message: 'Hospital cadastrado com sucesso!'});
  } catch (e) {
    res.status(500).send({message: 'Falha ao cadastrar o hospital.'});
  }
};

exports.update_hospital = async (req, res) => {
  try {
    await repository.update_hospital(req.params.id, req.body);
    res.status(200).send({
      message: 'Hospital atualizado com sucesso!'
    });
  } catch (e) {
    res.status(500).send({message: 'Falha ao atualizar o Hospital.'});
  }
};

exports.get_hospital = async function(req, res) {
  try {
    const data = await repository.get_hospital(req.params.cnes);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({message: 'Falha ao carregar o Hospital.'});
  }
};

