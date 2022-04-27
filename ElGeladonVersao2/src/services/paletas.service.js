const Paleta = require('../models/Paleta')

// const paletas = [
//     {
//       id: 1,
//       sabor: 'Açai com Leite Condensado',
//       descricao: 'Açai com Leite Condensado',
//       foto: 'assets/images/acai-com-leite-condensado.png',
//       preco: 5.5,
//     },
//     {
//       id: 2,
//       sabor: 'Banana com Nutella',
//       descricao: 'Banana com Nutella',
//       foto: 'assets/images/banana-com-nutella.png',
//       preco: 10.0,
//     },
//     {
//       id: 3,
//       sabor: 'Chocolate Belga',
//       descricao: 'Chocolate Belga',
//       foto: 'assets/images/chocolate-belga.png',
//       preco: 7.0,
//     },
//     {
//       id: 4,
//       sabor: 'Limão',
//       descricao: 'Limão',
//       foto: 'assets/images/limao.png',
//       preco: 6.0,
//     },
//     {
//       id: 5,
//       sabor: 'Maracuja',
//       descricao: 'Maracuja',
//       foto: 'assets/images/maracuja.png',
//       preco: 10.0,
//     },
//     {
//       id: 6,
//       sabor: 'Milho Verde',
//       descricao: 'Milho Verde',
//       foto: 'assets/images/milho-verde.png',
//       preco: 10.0,
//     },
//   ];

  const findPaletaService = async ()=>{
      //return paletas;
      const paletas = await Paleta.find();
      return paletas;
  }

  const findPaletaByIdService = async (id) =>{//compara se tem esse id no service (parte acima)
    //return paletas.find((paleta) => paleta.id == id);
    const paleta = await Paleta.findById(id);//o id dentro do metodo é o que vai ser passado na const
    return paleta;
  }

const createPaletaService = async (paleta) =>{

    /*const newId = paletas.length +1;
    newPaleta.id = newId;
    paletas.push(newPaleta);*/

    const newPaleta = await Paleta.create(paleta);

    return newPaleta;
}

const updatePaletaService = async (id,paleta)=>{//recebendo do controller na parte de update
    /*paletaEdited['id'] = id;//procurando o indice das paletas
    const paletaIndex = paletas.findIndex((paleta)=>paleta.id == id);
    paletas[paletaIndex] =  paletaEdited;//paleta alterada*/
    const paletaEdited = await Paleta.findByIdAndUpdate(id,paleta)
    return paletaEdited;
}

const deletePaletaService = async (id) =>{
    /*const paletaIndex = paletas.findIndex((paleta)=>paleta.id == id); //procurando o indice das paletas
    return paletas.splice(paletaIndex,1);*/
    return await Paleta.findByIdAndDelete(id);

}
  
  module.exports = {
      findPaletaService,
      findPaletaByIdService,
      createPaletaService,
      updatePaletaService,
      deletePaletaService
  }