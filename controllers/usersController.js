const {response, request} = require("express");
const User = require('../models/usersModel')

const createUser = async(req = request, res=response) => {
    
    try{
        const {body} = req
        const user = new User(body)
        await user.save()

        res.status(201).json({
            msg:"Usuario creado",
            user
        })
    }catch(error){
        res.status(500).json({
            msg:"Algo ocurrio al crear un usuario",
            error
        })
    }


    
}

const readUser = async(req,res) => {
    try {
        const { limit = 10 } = req.query
        const queryParam = { isActive:true }
        const recordLength = await User.countDocuments();
        const user = await User.find(queryParam).limit(Number(limit));
        res.json({
            recordLength,
            user
        })
    } catch (error) {
        res.status(500).json({
        msg:"Algo ocurrio al leer usuarios",
        error
         })
    }
}

const updateUser = (req = request , res) => {
    const {params, query} = req
    res.json({
        msg:"Modificar usuarios desde Controller"
    })
}

const deleteUser = (req,res) => {
    res.json({
        msg:"Borrar usuarios desde Controller"
    })
}
module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}