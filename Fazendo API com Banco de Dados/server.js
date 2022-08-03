console.log("Script server.js iniciado.");

const app = require('./src/index')
const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

