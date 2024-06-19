const author = require('../models/authors.model'); // Importar el modelo de la BBDD

const getAuthors = async (req, res) => {
    let authors;
    try {
        if (req.query.email) {
            authors = await author.getAuthorWithEmail(req.query.email);
        }
        else {
            authors = await author.getAllAuthors();
        } 
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({error: "Error en la BBDD"});
    } 
}

const createAuthor = async (req, res) => {
    const newAuthor = req.body; // {name, surname, email, image}
    if (
      "name" in newAuthor &&
      "surname" in newAuthor &&
      "email" in newAuthor &&
      "image" in newAuthor
    ) {
      try {
        const response = await author.createAuthor(newAuthor);
        res.status(201).json({
          items_created: response,
          data: newAuthor,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };

const updateAuthor = async (req, res) => {
    const modifiedAuthor = req.body; // {name, surname, email, image, old_email}
    if (
      "name" in modifiedAuthor &&
      "surname" in modifiedAuthor &&
      "email" in modifiedAuthor &&
      "image" in modifiedAuthor &&
      "old_email" in modifiedAuthor
    ) {
      try {
        const response = await author.updateAuthor(modifiedAuthor);
        res.status(201).json({
          items_updated: response,
          data: modifiedAuthor,
        });
      } catch (error) {
        res.status(500).json({ error: "Error en la BBDD" });
      }
    } else {
      res.status(400).json({ error: "Faltan campos en la entrada" });
    }
  };

  const deleteAuthor = async (req, res) => {
    let authors;
    try {
        authors = await author.deleteAuthor(req.query.email);
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({error: "Error en la BBDD"});
    } 
}

module.exports = {
    getAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}