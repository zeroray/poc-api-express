
const User = require('../models/user');

async function index(req, res) {

    users = await User.find({}, (err, users) => {
        if (err) {
            return res.status(500).send({
                'Error': err
            });
        }
        else {
            return res.status(200).send({
                users
            });
        }
    })
}

async function addUser(req, res) {
    var user = new User(req.body);
    user.save()
        .then(item => {
            res.send("item saved to database");
        })
        .catch(err => {
            res.status(400).send("unable to save to database");
        });
}

module.exports = { index, addUser }