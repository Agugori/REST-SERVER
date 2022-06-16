import Role from '../models/role.js'
import Usuario from '../models/usuario.js';

const isRoleValid = async (role = '') => {
    const roleExist = await Role.findOne({ role });
    if(!roleExist) {
        throw new Error(`El rol ${role} no esta registrado en la DB`)
    }
}

const emailReg = async (correo = '') => {
    const emailExist = await Usuario.findOne({ correo: correo})
    if( emailExist ) {
        throw new Error(`El correo: ${correo}, ya esta registrado`);
    }
}

const userIsTrue = async ( id ) => {
    const userExist = await Usuario.findById(id)
    if( !userExist ) {
        throw new Error(`El id: ${id}, no corresponde a un ID valido`);
    }
}

export {
    isRoleValid,
    emailReg,
    userIsTrue
}