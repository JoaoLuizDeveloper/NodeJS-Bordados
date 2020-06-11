const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const Restaurante = new Schema({
    Titulo:{
        type: String,
        required: true
    },
    Descricao: {
        type:String,
        required: true
    },
    Categoria: {
        type: Schema.Types.ObjectId,
        ref: "Categorias",
        required: true
    },
    thumbnail: {
        type: String
    },
    Data: {
        type: Date,
        default: Date.now()
    }
}, {
    toJSON: {
        virtuals: true,
    },
});

Postagem.virtual('thumbnail_url').get(function(){
    return `http://localhost:8081/uploads/${this.thumbnail}`
})

module.exports = mongoose.model("Postagens", Restaurante);