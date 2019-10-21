const express = require('express');
const router = new express.Router();
const controller = require('./vacina.controller');


/**
 *  @api {get} /vacina Retorna as vacinas 
 *  @apiName RetornaVacinas
 * @apiSuccess {Object[]} vacina Lista de Vacinas.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',controller.lista_vacina);

/**
 * @api{post} /vacina Cria Vacina
 * @apiname CriaVacina
 * @apiSuccess (Sucess 201) {Object} vacina Dados vacina.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.post('/',controller.cria_vacina)

/**
 * @api{delete} /vacina Remove Vacina
 * @apiname RemoveVacina
 * @apiSuccess (Sucess 201) {Object} 200 response
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.delete('/',controller.remove_vacina)

/**
 * @api{put} /vacina/:id atualiza Vacina
 * @apiname AtualizaVacina
 * @apiSuccess (Sucess 201) {Object} 200 vacina Dados Vacina
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.put('/:id', controller.atualiza_vacina)


/**
 * @api{get} /vacina/:id retorna Vacina especifica
 * @apiname RetornaVacina
 * @apiSuccess (Sucess 201) {Object} 200 vacina Dados vacina
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id', controller.get_vacina)

module.exports = router;