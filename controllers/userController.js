import { response } from "express";
import Usuario from '../models/usuario.js';
import bcryptjs from 'bcryptjs';


const usersGet = async (req, res = response) => {
    const { limite = 5, desde = 0} = req.query;
    const query = {state: true}

    // const usuarios = await Usuario.find(query)
    //     .skip(Number( desde ) )
    //     .limit( Number(limite) )
    // const total = await Usuario.countDocuments(query)
    
    const [total, usuarios] = await Promise.all([
        Usuario.countDocuments(query),
        Usuario.find(query)
            .skip(Number( desde ))
            .limit(Number( limite ))
    ])
    
    res.json({
        total,
        usuarios
    })
}

const usersPost = async (req, res = response) => {
    
    const { nombre, correo, password, role } = req.body;
    const usuario = new Usuario( {nombre, correo, password, role } );

    

    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync(password, salt)

    await usuario.save();

    res.json({
     usuario 
    })
}
const usersPut = async (req, res = response) => {

    const { id } = req.params;
    const {_id, password, google, ...rest} = req.body;

    if( password ) {
        const salt = bcryptjs.genSaltSync();
        rest.password = bcryptjs.hashSync(password, salt)
    }

    const usuario = await Usuario.findByIdAndUpdate( id, rest)

    res.json({
     usuario        
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: ' patch API -  desde controller'
    })
}
const usersDelete = async (req, res = response) => {
    const { id } = req.params;
    //borrarlo fisicamente
    // const usuario = await Usuario.findByIdAndDelete( id )
    const query = {state: false}

    const usuario = await Usuario.findByIdAndUpdate( id, query )

    res.json(usuario)
}
export {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}