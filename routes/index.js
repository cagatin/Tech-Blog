const router = require('express').Router();
const homeRoutes = require('../controller/homeRoutes');
const apiRoutes = require('../controller/api/apiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;