const repository = require('../repositories/vacina-repository');


exports.list_vacina = async (req, res) =>{
    try {
        const data = await repository.list_vacina();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as vacinas.' });
    }
};

exports.delete_vacina = async (req, res) =>{
    try {
        await repository.delete_vacina(req.params.id);
        res.status(200).send({
            message: 'Vacina removida com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao remover a vacina.' });
    }
};

exports.create_vacina = async (req, res) => {
    try {
        await repository.create_vacina(req.body);

        res.status(201).send({ message: 'Vacina cadastrada com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar a vacina.' });
    }
};

exports.update_vacina = async function(req, res) {
    try {
        await repository.update_vacina(req.params.id, req.body);
        res.status(200).send({
            message: 'Vacina atualizada com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar a vacina.' });
    }
};

exports.get_vacina = async (req, res) =>{
    try {
        const data = await repository.get_vacina(req.params.codigo);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar a vacina.' });
    }
};

exports.delete_vacinas = async (req, res) =>{
    try {
        await repository.delete_vacinas();
        res.status(200).send({
            message: 'Vacinas removidas com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao remover as vacinas.' });
    }
};