const mongoose = require('mongoose');
const paletasService = require('../services/paletas.service');

const findPaletasController = async (req, res)=>{
    const allPaletas = await paletasService.findPaletaService();//requisicao de todas as peletas

    if(allPaletas.length == 0){
        return res.status(400).send({message:'Nao há paletas cadastradas'})
    }

    res.send(allPaletas);//envia a req
}

const findPaletaByIdController = async (req,res)=>{
    const idParam = req.params.id;//params é funcao do req

    /*if(!mongoose.Types.ObjectId.isValid(idParam)){//types vem do mongo
        res.status(400).send({message:'ID Invalido'});//se nao for valido senda essa mensagem
    }*/

    const chosenPaleta = await paletasService.findPaletaByIdService(idParam);//aqui retorna a paletas escolhida

    if(!chosenPaleta){
        return res.status(400).send({message:'Paleta não encontrada'})
     }

    res.send(chosenPaleta);
}

//marcando coisas com TODO e depois ctrl shift f pra buscar na plicao toda
//TODO OK: createPaletaController
//TODO: deletePaletaController
//TODO OK: updatePaletaController

const createPaletaController = async  (req,res)=>{
    const paleta = req.body;//sera recebido pelo json abaixo
    
    /*if(
        !paleta ||
        !paleta.sabor ||
        !paleta.descricao ||
        !paleta.foto ||
        !paleta.preco){
            return res.status(400).send({ message: "Você não preencheu todos os dados para adicionar a paleta!" })
    }*/
    
    const newPaleta = await paletasService.createPaletaService(paleta);
    res.status(201).send(newPaleta);
}

const updatePaletaController = async (req,res)=>{
    const idParam = req.params.id;//recebe nas duas linhas
    const paletaEdit = req.body;

    /*if(!mongoose.Types.ObjectId.isValid(idParam)){
        res.status(400).send({message:'Id invalido'});
    }*/

    //validando se exite uma paleta com o ID passado
    /*const chosenPaleta = await paletasService.findPaletaByIdService(idParam);

    if(!chosenPaleta){
        return res.status(400).send({message:'Paleta não cadastrada'});
    }

    //se cair aqui é pq encotrei um id valido e existe no meu banco do mongo (abaixo:)
    if(
        !paletaEdit ||
        !paletaEdit.sabor ||
        !paletaEdit.descricao ||
        !paletaEdit.foto ||
        !paletaEdit.preco){
            return res.status(400).send({ message: "Você não preencheu todos os dados para editar a paleta!" })
    }*/

    /*if(!idParam){
        return res.status(400).send({message:'Paleta nao encontrada'});
    }*/

    const updatePaleta = await paletasService.updatePaletaService(idParam,paletaEdit);

    /*const updatePaleta = paletasService.updatePaletaService(idParam,paletaEdit);//atualiza*/
    res.send(updatePaleta);//devoolve
}

const deletePaletaController= async (req,res)=>{

    const idParam = req.params.id;

    /*if (!mongoose.Types.ObjectId.isValid){
        return res.status(400).send({message:'Id invalido'});
    }*/

    const chosenPaleta =  paletasService.findPaletaByIdService(idParam);

    /*if(!chosenPaleta){
        return res.status(400).send({message:'Paleta não encontrada'})
    }*/

    await paletasService.deletePaletaService(idParam);

    // paletasService.deletePaletaService(idParam);
    res.send({message:'Paleta deletada com sucesso'})
}



module.exports = {//exportando para todo o programa
    findPaletasController,
    findPaletaByIdController,
    createPaletaController,
    updatePaletaController,
    deletePaletaController
};