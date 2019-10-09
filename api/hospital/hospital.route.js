const express = require('express');
const router = new express.Router();
const controller = require('./hospital.controller');


/**
 *  @api {get} /hospital Retrieve hospitals 
 *  @apiName RetrieveHospitals
 * @apiSuccess {Object[]} hospital List of hospitals.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',controller.hospital_list);

/**
 * @api{post} /hospital Create Hospital
 * @apiname CreateHospital
 * @apiSuccess (Sucess 201) {Object} hospital Hospital's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.post('/',controller.create_hospital)

/**
 * @api{delete} /hospital Delete Hospita
 * @apiname DeleteHospital
 * @apiSuccess (Sucess 201) {Object} 200 response
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.delete('/',controller.delete_hospital)

/**
 * @api{put} /hospital/:id update Hospital
 * @apiname UpdateHospital
 * @apiSuccess (Sucess 201) {Object} 200 hospital Hospital's data
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.put('/:id', controller.update_hospital)


/**
 * @api{get} /hospital/:id get specfic Hospital
 * @apiname GetHospital
 * @apiSuccess (Sucess 201) {Object} 200 hospital Hospital's data
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/:id', controller.get_hospital)

module.exports = router;