//enrutador de express
//peticiones
const {Router}=require('express');
const router= Router();
const User=require('../models/Users');
const faker=require('faker');


router.get('/api/Users',async (req,res)=>{
    const users=await User.find();
    res.json({users});
    
});

router.get('/api/users/create',async (req, res)=>{
    for (let i=0;i<=2;i++){
         await User.create({
             nombre: faker.name.firstName(),
             apellido: faker.name.lastName(),
            
         });
    }
    res.json({message:'5 Users created'});
});

module.exports=router; 
