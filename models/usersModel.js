const { Schema, model } = require("mongoose");

const UserSchema = Schema({
    userName: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    email:{
        type:String,
        required: [true, 'El email es obligatorio'],
        unique: true
    },
    phoneNumber:{
        type: Number
    },
    password:{
        type: String,
        required: [true, 'La contrasena es obligatoria']
    },
    isActive:{
        type: Boolean,
        default: true
    }
})

UserSchema.method('meow', function (){
    console.log('Meeeeeeooooooow');
})

module.exports = model('User', UserSchema)