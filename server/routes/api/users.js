const express=require('express');
const router=express.Router();

//Item model
const User=require('../../models/User');

//@route GET api/users
//@desc Get all user
//@access Admin Only
router.get('/',(req,res)=>{
    User.find()
        .then(users=>res.json(users));
});


//@route POST api/users
//@desc Create user
//@access Public
router.post('/',(req,res)=>{
    const newUser=new User({
        correo: req.body.correo,
        nombre:req.body.nombre,
        fechaNac:req.body.fechaNac,
        ocupacion:req.body.ocupacion,
        pais:req.body.pais,
        ciudad:req.body.ciudad
    });
    newUser.save().then(user=>res.json('Creado exitosamente:   '+user));
});


//@route DELETE api/users/:correo
//@desc Delete user
//@access User or Admin Only
router.delete('/:correo',(req,res)=>{
    User.findOneAndDelete({correo:req.params.correo}, (err, user)=>{
        if(err){
            throw err;
            res.json('Error en pedido de DELETE');  
        } else{
            if(user!=null){
                res.json('Borrado exitosamente:  '+user.correo);
            }else{
                res.json('No existe el usuario');
            }
        }
        
    });
});


module.exports=router;