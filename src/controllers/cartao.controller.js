const repository = require('../repositories/cartao-repository');


exports.list_cartao = async (req, res) =>{
    try {
        const data = await repository.list_cartao();
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar os cartões.' });
    }
};

exports.delete_cartao = async (req, res) =>{
    try {
        await repository.delete_cartao(req.params.id);
        res.status(200).send({
            message: 'Cartão removido com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao remover o cartão.' });
    }
};

exports.create_cartao = async (req, res) =>{
    try {
        await repository.create_cartao(req.body);

        res.status(201).send({ message: 'Cartão cadastrado com sucesso!' });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao cadastrar o cartão.' });
    }
};

exports.update_cartao = async (req, res) =>{
    try {
        await repository.update_cartao(req.params.id, req.body);
        res.status(200).send({
            message: 'Cartão atualizado com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao atualizar o cartão.' });
    }
};

exports.get_cartao = async (req, res) =>{
    try {
        const data = await repository.get_cartao(req.params.sus);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar o cartão.' });
    }
};

exports.inserir_vacina = async (req, res) =>{
    try {
        await repository.inserir_vacina(req.params.sus, req.params.codigo);
        res.status(200).send({
            message: 'Vacina inserida com sucesso!'
        });
    } catch (e) {
        res.status(500).send({ message: 'Falha ao inserir vacina no cartão.' });
    }
};

exports.list_vacinas = async (req, res) =>{
    try {
        const data = await repository.list_vacinas(req.params.sus);
        res.status(200).send(data);
    } catch (e) {
        res.status(500).send({ message: 'Falha ao carregar as vacinas do usuário.' });
    }
};