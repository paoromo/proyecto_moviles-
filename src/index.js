const app = require("./app")
const{ connect }=require('./database');
//arranca servidor
async function main(){
    //database conection 
    await connect();
    
    // inicia servidor de exprees
    await app.listen(4000);
    console.log('Server puerto 4000: conecteadp');
} 
 main();