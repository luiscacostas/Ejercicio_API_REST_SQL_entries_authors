const express = require('express');
const router = express.Router();
const authorsController = require("../controllers/authors.controller");
const { validateAuthors } = require('../validators/authors.validators');


router.get('/',  authorsController.getAuthors);
router.post('/', validateAuthors, authorsController.createAuthor);
router.put('/', validateAuthors, authorsController.updateAuthor);//:id
router.delete('/', validateAuthors, authorsController.deleteAuthor);//:id

module.exports = router;

// GET http://localhost:3000/api/authors --> ALL
// GET http://localhost:3000/api/authors?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/authors

