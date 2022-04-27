const express = require('express');
const cors = require('cors');

const port = 3000;
const app = express();

const route = require('./src/routes/paletas.routes');

const connectToDatabase = require('./src/database/database');



// Configurando nossa aplicação para trabalhar com JSON's
app.use(express.json());

//conectando com mongodb
connectToDatabase();

// Configurando o CORS para que nossa aplicação seja visivel pelo front
app.use(cors());

//configurando arquivo externo de rotas para as paletas
app.use('/paletas', route)

// Definir dados para usar na aplicação
// const paletas = [
//   {
//     id: 1,
//     sabor: 'Açai com Leite Condensado',
//     descricao: 'Açai com Leite Condensado',
//     foto: 'assets/images/acai-com-leite-condensado.png',
//     preco: 5.5,
//   },
//   {
//     id: 2,
//     sabor: 'Banana com Nutella',
//     descricao: 'Banana com Nutella',
//     foto: 'assets/images/banana-com-nutella.png',
//     preco: 10.0,
//   },
//   {
//     id: 3,
//     sabor: 'Chocolate Belga',
//     descricao: 'Chocolate Belga',
//     foto: 'assets/images/chocolate-belga.png',
//     preco: 7.0,
//   },
//   {
//     id: 4,
//     sabor: 'Limão',
//     descricao: 'Limão',
//     foto: 'assets/images/limao.png',
//     preco: 6.0,
//   },
//   {
//     id: 5,
//     sabor: 'Maracuja',
//     descricao: 'Maracuja',
//     foto: 'assets/images/maracuja.png',
//     preco: 10.0,
//   },
//   {
//     id: 6,
//     sabor: 'Milho Verde',
//     descricao: 'Milho Verde',
//     foto: 'assets/images/milho-verde.png',
//     preco: 10.0,
//   },
// ];

// Printa um hello world no navegador
// app.get('/', function (req, res) {
//   res.send('Hello Blue Módulo 3 Fullstack');
// });

// Lista todas as pelates do nosso array
// app.get('/paletas/find-paletas', (req, res) => {
//   res.send(paletas);
// });

// Listar uma paleta pelo seu ID
// app.get('/paletas/find-paletas/:id', (req, res) => {
//   const idParam = req.params.id;
//   const chosenPaleta = paletas.find((paleta) => paleta.id == idParam);
//   res.send(chosenPaleta);
// });

// Fazemos o app ouvir na porta 3000
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port} 🚀`);
});