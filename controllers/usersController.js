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

const readUser = (req,res) => {
    res.json({
        msg:"Leer usuaruis desde Controller"
    })
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