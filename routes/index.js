const router = require('express').Router();
const homeRoutes = require('../controller/homeRoutes.js');
const apiRoutes = require('../controller/api/apiRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;
