const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const userSchema = new mongoose.Schema({
 
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdministrator: {
        type: Boolean,
        default: false
    }

});

userSchema.plugin(AutoIncrement, {inc_field: 'userId'});

exports.getUser = function() {
    return mongoose.model("User", userSchema)
}
