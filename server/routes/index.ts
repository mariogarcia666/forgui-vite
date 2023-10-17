import { Router } from "express";
import Estate from '../models/EstateModel'
import { config } from "dotenv";
import User from "../models/UsersModel";

const bcrypt = require('bcrypt');
const router = Router();
router.get("/Estate",async (req,res)=>{
    const task = await Estate.find();
    res.send(task)
});

router.get("/register",async (req,res)=>{
  const task = await User.find();
  res.send(task)
});
    
router.post("/Estate",async (req,res)=>{
    const{ImgURL, title, author, date, ubication, type, status, description, price, lapse} = req.body;
    const estate = new Estate ({ImgURL, title, author, date, ubication, type, status, description, price, lapse});
    await estate.save();
    res.json(estate)
});

router.post('/register', async (req, res) => {

   try {
    
      const { name, lastname, username, email, passw, imgURL, description, phone } = req.body;
  
      // Verificar si el usuario ya está registrado
      /*const existingUser = await User.findOne({ username });
      if (existingUser) {
        return res.status(409).json({ error: 'El usuario ya existe' });
      }*/
  
      const hashedPassword = await bcrypt.hash(passw, 10);
  
      const newUser = new User({
        name, 
        lastname, 
        username, 
        email, 
        passw : hashedPassword ,
        imgURL,
        description, 
        phone,
        
      }); 
     
      await newUser.save();
    
      res.json(newUser)
    } catch (error) {
      return res.status(500).send(error)
    }
  });
  
  
  router.post('/login', async (req, res) => {
    try {
      const { username, passw } = req.body;
  
      // Buscar al usuario en la base de datos
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      // Verificar la contraseña
      const isPasswordValid = await bcrypt.compare(passw, user.passw);
      if (!isPasswordValid) {
        return res.status(401).json({ error: 'Credenciales inválidas' });
      }
  
      return res.status(200).json({ message: 'Inicio de sesión exitoso' });
    } catch (error) {
      return res.status(500).json({ error: 'Error interno del servidor' });
    }
  });

router.get("/Estate/:id",async(req,res)=>{
    try{
        const estate = await Estate.findById(req.params.id);
        if(!estate) return res.status(404).json({message: "Task not found"})

        return res.send(estate)
    }catch(error){
        return res.status(500).send(error);
    }
});

router.delete("/Estate/:id",async(req,res)=>{
    try{
        const estate = await Estate.findByIdAndDelete(req.params.id);
        if(!estate) return res.status(404).json({message: "Task not found"})

        return res.send(estate)
    }catch(error){
        return res.status(500).send(error);
    }
});
    
router.put("/Estate/:id", async (req,res)=>{
    const updatedEstate = await Estate.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })
    res.json(updatedEstate);
});
    

export default router;