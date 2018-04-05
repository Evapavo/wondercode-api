const express = require('express');
const router = express.Router();
const uploadConfig = require('../configs/multer.config');
const sourceController = require('../controllers/source.controller');
const sourceMiddleware = require('../middleware/source.middleware');
const secureMiddleware = require('../middleware/secure.middleware');

router.get('/', secureMiddleware.isAuthenticated, sourceController.list);
router.get('/:id', secureMiddleware.isAuthenticated, sourceMiddleware.checkValidId, sourceController.get);
router.post('/', secureMiddleware.isAuthenticated, uploadConfig.single('image'), sourceController.create);
router.put('/:id', secureMiddleware.isAuthenticated, uploadConfig.single('image'), sourceController.edit);
router.delete('/:id', secureMiddleware.isAuthenticated, sourceMiddleware.checkValidId, sourceController.delete);

module.exports = router;
