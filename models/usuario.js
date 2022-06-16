import mongoose from "mongoose";

const usuarioSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: [true, 'el nombre es obligatorio'],
        trim: true
    },
    correo: {
        type: String,
        required: [true, 'el correo es obligatorio'],
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, 'el password es obligatorio'],
        trim: true
    },
    img: {
        type: String
    },
    role: {
        type: String,
        required: true,
        emun: ['ADMIN_ROLE', 'USER_ROLE']

    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    }
});

usuarioSchema.methods.toJSON = function() {
    const { __v, password, ... user} = this.toObject();
    return user;
}

const Usuario = mongoose.model('Usuario', usuarioSchema)

export default Usuario;