const mongoose = require('mongoose');

const PaletaSchema = new mongoose.Schema(
{
    sabor:{type:String,required:true},//tipo e se ele tem ou nao que ser informado (obrigatorio)
    descricao:{type:String,required:true},
    foto:{type:String,required:true},
    preco:{type:Number,required:true}
});

const Paleta = mongoose.model('paletas',PaletaSchema);

module.exports = Paleta;