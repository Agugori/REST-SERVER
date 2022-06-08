import { response } from "express";


const usersGet =  (req, res = response) => {
    const {q, nombre, apikey} = req.query;

    res.json({
     msg: 'get API -  desde controller',
    q,
    nombre: "Vacio",
    apikey
    })
}

const usersPost = (req, res = response) => {
    const {nombre, edad} = req.body;

    res.json({
     msg: 'post API -  desde controller',
     nombre,
     edad   
    })
}
const usersPut = (req, res = response) => {
    const { id } = req.params;

    res.json({
     msg: 'put API -  desde controller',
     id
        
    })
}
const usersPatch = (req, res = response) => {
    res.json({
        msg: ' patch API -  desde controller'
    })
}
const usersDelete =(req, res = response) => {
    res.json({
     msg: 'delete API -  desde controller'   
    })
}
export {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}