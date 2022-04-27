const mongoose = require ('mongoose');

const validId = (req, res, next) => {//recebe as requisicoes e faz a validacao pra nao crashar o programa, caso de problema vai em 'next' e segue com o programa
    const idParam = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(idParam)) {
      return res.status(400).send({ message: 'Id invalido!' });
    }
    next();//continue o programa
  };
  
  const validObjectBody = (req, res, next) => {//valida se o json veio errado
    const paleta = req.body;//requisicao somente do body (json)
    if (
      !paleta ||
      !paleta.sabor ||
      !paleta.descricao ||
      !paleta.foto ||
      !paleta.preco
    ) {
      return res
        .status(400)
        .send({ message: 'Envie todos os campos da paleta' });
    }
    next();//continue o programa
  };
  
  module.exports = {//exportando para todo o programa
    validId,
    validObjectBody,
  };
  