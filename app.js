const express = require('express');
const app = express();
app.use(express.json());

const { auth } = require('express-oauth2-jwt-bearer');

const librosRouter = require('./routes/libros');
const errorHandler = require('./middleware/errorHandler');

const autentication = auth({
    audience: 'http://localhost:3000/libros',
    issuerBaseURL: 'https://iismaflores.us.auth0.com/',
    tokenSigningAlg: 'RS256'
  });

app.use('/libros', autentication, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
    console.log("Servidor iniciado en el puerto 3000");
});