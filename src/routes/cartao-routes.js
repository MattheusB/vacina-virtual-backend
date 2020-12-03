const express = require('express');
const router = new express.Router();
const controller = require('../controllers/cartao.controller');


/**
 * @api {get} /cartao Get all cartoes 
 * @apiName GetAllCartoes
 * @apiSuccess {Object[]} cartao List of cartoes.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/', controller.list_cartao);

/**
 * @api {get} /cartao/:sus Get specfic cartao
 * @apiname GetCartao
 * @apiSuccess (Sucess 200) {Object} 200 cartao Cartao's data.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/:id', controller.get_cartao)

/**
 * @api {get} /cartao/:sus Get specfic cartao
 * @apiname GetCartao
 * @apiSuccess (Sucess 200) {Object} 200 cartao Cartao's data.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/:id/vacinas', controller.list_vacinas_cartao)

/**
 * @api {post} /cartao Create cartao
 * @apiname CreateCartao
 * @apiSuccess (Sucess 201) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.post('/', controller.create_cartao)

/**
 * @api {delete} /cartao/:id Delete cartao
 * @apiname DeleteCartao
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/:id', controller.delete_cartao)

/**
 * @api {put} /cartao/:id Update cartao
 * @apiname UpdateCartao
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.put('/:id', controller.update_cartao)

/**
 * @api {patch} /cartao/:sus/:codigo Insert specfic vacina in cartao
 * @apiname InsertVacina
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.patch('/:id/:codigo', controller.inserir_vacina)

/**
 * @api {delete} /cartao/:id Delete all cartoes
 * @apiname DeleteAllCartoes
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/', controller.delete_cartoes)

module.exports = router;