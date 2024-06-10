 const express = require('express');
 const { index } = require('../controllers/articles');
 const router = express.Router();

 router.get('/articles', index); 6
 module.exports = router;
