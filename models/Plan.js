var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var planSchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    duration: {
        type: Number, 
        required: true, 
    },
    interest: {
        type: Number, 
        required: true, 
    }
},{
    collection: 'plans',
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
});

const Plans = mongoose.model('Plan', planSchema);
module.exports = Plans;