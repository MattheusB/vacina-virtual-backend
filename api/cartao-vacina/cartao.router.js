const express = require('express');
const router = new express.Router();
const controller = require('./cartao.controller');


/**
 *  @api {get} /cartao Retrieve cartoes 
 *  @apiName RetrieveCartoes
 * @apiSuccess {Object[]} cartao List of cartoes.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',controller.cartao_list);

/**
 * @api{post} /cartao Create Cartao
 * @apiname CreateCartao
 * @apiSuccess (Sucess 201) {Object} Cartao Cartao's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.post('/',controller.create_cartao)

/**
 * @api{delete} /cartao Delete Cartao
 * @apiname DeleteCartao
 * @apiSuccess (Sucess 201) {Object} 200 response
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.delete('/',controller.delete_cartao)

/**
 * @api{put} /cartao/:id update Cartao
 * @apiname UpdateCartao
 * @apiSuccess (Sucess 201) {Object} 200 cartao Cartao's data
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.put('/:id', controller.update_cartao)


/**
 * @api{get} /cartao/:id get specfic Cartao
 * @apiname GetCartao
 * @apiSuccess (Sucess 201) {Object} 200 cartao Cartao's data
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id', controller.get_cartao)

module.exports = router;