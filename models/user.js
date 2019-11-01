var mongoose =  require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = Schema({
    name: String,    
    lastName: String
});

module.exports = mongoose.model('User', UserSchema);