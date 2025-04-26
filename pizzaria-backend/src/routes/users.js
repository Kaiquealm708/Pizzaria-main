const express = require('express');
const router = express.Router();


// Simulação de banco de dados (você pode conectar ao real depois)
const usuarios = [];

router.post('/', (req, res) => {
  const novoUsuario = req.body;

  if (!novoUsuario.nome || !novoUsuario.email || !novoUsuario.senha) {
    return res
      .status(400)
      .json({ erro: 'Campos obrigatórios não preenchidos' });
  }

  // Aqui você pode adicionar validações de CPF, e-mail etc.

  usuarios.push(novoUsuario); // Simulando inserção
  console.log('Usuário cadastrado:', novoUsuario);

  res.status(201).json({ mensagem: 'Usuário criado com sucesso!' });
});

module.exports = router;
