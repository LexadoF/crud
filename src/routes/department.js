const express = require('express');

const router = express.Router();

const depController =require('../controllers/depController');

router.get('/', depController.list);
router.post('/add', depController.save );
router.get('/delete/:id', depController.delete );

router.get('/update/:id', depController.edit );
router.post('/update/:id', depController.update );


module.exports = router;