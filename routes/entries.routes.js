const express = require('express');
// Rutas de productos
const router = express.Router();
const entriesController = require("../controllers/entries.controller");


router.get('/', entriesController.getEntries);
router.post('/', entriesController.createEntry);
router.put('/', entriesController.updateEntry);//:id
router.delete('/', entriesController.deleteEntry);//:id

module.exports = router;

// GET http://localhost:3000/api/entries --> ALL
// GET http://localhost:3000/api/entries?email=hola@gmail.com --> por email
// POST http://localhost:3000/api/entries
/*
{
    "title":"noticia desde Node",
    "content":"va a triunfar esto2",
    "email":"alejandru@thebridgeschool.es",
    "category":"sucesos"
}
    */
