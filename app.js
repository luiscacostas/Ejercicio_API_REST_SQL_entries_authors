const express = require("express"); //iniciar express
const app = express(); //inicializar servidor
const port = 3000;

// Rutas

const entriesRoutes = require("./routes/entries.routes")
const authorsRoutes = require("./routes/authors.routes")

app.use(express.json()); // Habilito recepción de JSON en servidor convierte a json

//Middlewares
const error404 = require("./middlewares/error404");
const morgan = require("./middlewares/morgan");

// Logger
app.use(morgan(':method :url :status :param[id] - :response-time ms :body'));

app.get("/", (req, res) => {
  res.send("Hello !");
});

// Rutas
app.use('/api/entries',entriesRoutes);
app.use('/api/authors',authorsRoutes);

app.use(error404);


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});


