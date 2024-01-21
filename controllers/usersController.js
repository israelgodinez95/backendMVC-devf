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

const updateUser = async(req = request , res) => {
    try {
        const {params, body} = req;
        const { userId } = params;

        await User.findByIdAndUpdate(userId, body)
        const userToShow = await User.findById(userId)
        
        res.status(202).json({
            msg:"Los usuarios se modificaron correctamente",
            userToShow
        })
    } catch (error) {
        res.status(500).json({
        msg:"Algo ocurrio al modificar el registro",
        error
    })
}}

const deleteUser = async(req = request,res = response) => {
    try {
        const { userId } = req.params
        const deleteState = {"isActive": false}
        await User.findByIdAndUpdate(userId, deleteState);
        const userToShow = await User.findById(userId)

        res.status(202).json({
            msg:"Se borro el registro",
            userToShow
        })
    } catch (error) {
        res.status(500).json({
            msg:"Algo ocurrio al eliminar el registro",
            error
    })
}}

module.exports = {
    createUser,
    readUser,
    updateUser,
    deleteUser
}