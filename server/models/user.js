var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

module.exports = {User};
//
// var user = new User({
//     email: 'vishwakt@gmail.com'
// });
//
// user.save().then((doc) => {
//     console.log('User saved', doc)
// }, (err) => {
//     console.log('User expected', err)
// });