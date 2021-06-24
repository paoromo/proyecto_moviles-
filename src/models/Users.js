//maneja la base de datos
const {Schema, model}=require('mongoose'); 

const userSchema = new Schema({
    nombre: String,
    apellido: String,
    
});



module.exports= model('User',userSchema);
