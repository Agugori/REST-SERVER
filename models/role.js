import mongoose from "mongoose";

const roleSchema = mongoose.Schema({
    role: {
        type: String,
        required: [true, 'El rol es obligatorio']
    }
})

const Role = mongoose.model('Role', roleSchema);

export default Role;