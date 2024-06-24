const pool = require('../config/db_pgsql');
const queries = require('../queries/authors.queries')

const getAllAuthors = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllAuthors)
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const getAuthorWithEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.getAuthorWithEmail, [email])
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createAuthor = async (author) => {
    const { name, surname, email, image } = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.createAuthor, [name, surname, email, image])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}
const updateAuthor = async (author) => {
    const { name, surname, email, image, old_email} = author;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.updateAuthor, [name, surname, email, image, old_email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const deleteAuthor = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteAuthor,[email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const authors = {
    getAuthorWithEmail,
    getAllAuthors,
    createAuthor,
    updateAuthor,
    deleteAuthor
}

module.exports = authors;

// getAllAuthors().then(data =>console.log(data))

// getAuthorWithEmail('jabier@thebridgeschool.es').then(data =>console.log(data))

// let autorcito = {
//     name: 'Je',
//     surname: 'Ro',
//     email: 'jr@gmil.com',
//     image: 'https://randomuser.me/api/portraits/thumb/men/5.jpg',
//     old_email:'birja@thebridgeschool.es'
// }

// // createAuthor(autorcito).then(data =>console.log(data))

// updateAuthor(autorcito).then(data => console.log(data))

//deleteAuthor('diego4@thebridgeschool.es').then(data =>console.log(data))

// {
//     "name": "KJ ROWL",
//     "surname": "KJ",
//     "email": "kr@gmil.com",
//     "image": "https://randomuser.me/api/portraits/thumb/men/52.jpg"
// }