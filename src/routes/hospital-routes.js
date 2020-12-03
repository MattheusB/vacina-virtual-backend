const express = require('express');
const router = new express.Router();
const controller = require('../controllers/hospital.controller');


/**
 * @api {get} /hospital Get all hospitals 
 * @apiName GetAllHospitals
 * @apiSuccess {Object[]} hospital List of hospitals.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/', controller.list_hospital);

/**
 * @api {get} /hospital/:cnes Get specfic hospital
 * @apiname GetHospital
 * @apiSuccess (Sucess 200) {Object} 200 hospital Hospital's data.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.get('/:id', controller.get_hospital)

/**
 * @api {post} /hospital Create hospital
 * @apiname CreateHospital
 * @apiSuccess (Sucess 201) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.post('/', controller.create_hospital)

/**
 * @api {delete} /hospital/:id Delete hospital
 * @apiname DeleteHospital
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/:id', controller.delete_hospital)

/**
 * @api {put} /hospital/:id Update hospital
 * @apiname UpdateHospital
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.put('/:id', controller.update_hospital)

/**
 * @api {delete} /hospital/:id Delete all hospitais
 * @apiname DeleteAllHospitais
 * @apiSuccess (Sucess 200) {Object} 200 response.
 * @apiError {Object} 500 Some parameters may contain invalid values.
 */
router.delete('/', controller.delete_hospitais)

module.exports = router;