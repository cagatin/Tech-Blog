const router = require('express').Router();
const homeRoutes = require('../controller/homeRoutes.js');
const apiRoutes = require('../controller/api/apiRoutes.js');
const usersApiRoutes = require('../controller/api/userApiRoutes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/api/users', usersApiRoutes);

module.exports = router;
