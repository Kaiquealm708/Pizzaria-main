const express = require('express');
const cors = require('cors');
const usersRoutes = require('./src/routes/users'); // Corrigido
const authenticationRouter = require('./src/routes/authentication'); 
const app = express();

// Habilitar o parsing de JSON no corpo da requisição
app.use(express.json());

// Configuração de CORS
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// Rotas
app.use("/api/users", usersRoutes);
app.use('/api/authentication', authenticationRouter);

// Rota de teste
app.get('/', (req, res) => {
  res.send('Servidor funcionando!');
});

// Iniciar o servidor
app.listen(3002, () => {
  console.log('Servidor rodando na porta 3002');
});

module.exports = app;
