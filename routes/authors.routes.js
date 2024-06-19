const express = require('express');
const router = express.Router();
const authorsController = require("../controllers/authors.controller");


router.get('/', authorsController.getAuthors);
router.post('/', authorsController.createAuthor);
router.put('/', authorsController.updateAuthor);//:id
router.delete('/', authorsController.deleteAuthor);//:id

module.exports = router;