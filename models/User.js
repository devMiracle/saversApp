var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    
    name: {
        type: String, 
        required: true
    },
    email: {
        type: String, 
        required: true, 
        unique: true 
    },
    phoneNumber: {
        type: String, 
        required: true, 
        unique: true 
    },
    password: {
        type: String,
        required: true
    }
},{
    collection: 'users',
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
});

const Users = mongoose.model('User', userSchema);

function login(userName,password){
    
}

function create(email,phoneNumber){
    return {'email':email,'phoneNumber':phoneNumber}
}

module.exports = Users;