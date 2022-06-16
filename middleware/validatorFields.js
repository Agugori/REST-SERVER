import { validationResult } from "express-validator/src/validation-result.js";

const validateFields = (req, res, next) => {

    const fails = validationResult(req);
    if(!fails.isEmpty()){
        return res.status(400).json(fails)
    }  
    
    next();
}

export default validateFields;