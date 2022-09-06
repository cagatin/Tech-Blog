const router = require('express').Router();
const apiRoutes = require('../controller/api/apiRoutes');

router.use('/api', apiRoutes);

module.exports = router;