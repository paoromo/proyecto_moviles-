const mongoose= require('mongoose');

async function connect(){
    await mongoose.connect('mongodb://localhost/recuerdaMed',{
        useNewUrlParser:true
    });
    console.log('database conect');
};

module.exports={ connect };