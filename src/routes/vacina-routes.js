const express = require('express');
const router = new express.Router();
const controller = require('../controllers/vacina.controller');


/**
 * @api {get} /vacina Get all vacinas 
 * @apiName GetAllVacinas
 * @apiSuccess {Object[]} vacina List of vacinas.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/', controller.list_vacina);

/**
 * @api {get} /vacina/:id Get specific vacina
 * @apiname GetVacina
 * @apiSuccess (Sucess 200) {Object} 200 vacina Data's vacina.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/:codigo', controller.get_vacina)

/**
 * @api {post} /vacina Create vacina
 * @apiname CreateVacina
 * @apiSuccess (Sucess 201) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.post('/', controller.create_vacina)

/**
 * @api {delete} /vacina Remove vacina
 * @apiname DeleteVacina
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/:id', controller.delete_vacina)

/**
 * @api {put} /vacina/:id Update vacina
 * @apiname UpdateVacina
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.put('/:id', controller.update_vacina)

module.exports = router;