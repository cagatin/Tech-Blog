const router = require('express').Router();
const homeRoutes = require('../controller/homeRoutes');

router.use('/', homeRoutes);

module.exports = router;