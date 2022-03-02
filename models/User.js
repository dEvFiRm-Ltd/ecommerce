const {Schema,model} = require('mongoose');

const userSchema = new Schema({
    username: String,
    email: String,
    password: String,
    profilePics: String,
    googleId: String,
    facebookId: String,

},{ 
    timestamps: true 
});

module.exports = model('User', userSchema);


