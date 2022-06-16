import express from "express";
import { check } from "express-validator";
import { usersGet, usersPost, usersPut, usersPatch, usersDelete } from '../controllers/userController.js';
import { isRoleValid, emailReg, userIsTrue } from "../helpers/db-validators.js";
import validateFields from "../middleware/validatorFields.js";
const router = express.Router();


router.get('/', usersGet)
router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min: 6}),
    // check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailReg ),
    // check('role', 'No es un rol permitido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('role').custom( isRoleValid ),
    validateFields 
], usersPost)
router.put('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( userIsTrue ),
    check('role').custom( isRoleValid ),
    validateFields
], usersPut)
router.delete('/:id',[
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( userIsTrue ),
    validateFields
], usersDelete)

router.patch('/', usersPatch)

export default router;