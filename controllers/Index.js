const router = require('express').router();

const noteRoutes = require('./note-routes');

router.use('/notes', noteRoutes);

module.exports = router;
