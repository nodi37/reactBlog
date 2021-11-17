const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const model = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    username: String
});

const User = new mongoose.model("User", model);

function register(username, email, pass) {
    bcrypt.hash(pass, parseInt(process.env.ROUNDS), (err, hash) => {
        if (err) {
            console.log(err);
        } else {
            const newuser = new User({
                email: email,
                password: hash,
                username: username
            })
            newuser.save().then((usr)=>{
                console.log("New user registered. User name: " + usr.username + ". User email: " + usr.email);
            });
        }
    })
}//Not ready yet :)

function login(ip, email, password) {
    return new Promise((resolve, reject)=>{
        User.findOne({
            email: email
        }).then((user) => {
            if (!user) {
                console.log(`[${newDate()}][Login failed, user not found][IP:${ip}]`);
                reject("User not found");
            } else {
                bcrypt.compare(password, user.password, (err, match) => {
                    if (err) {
                        console.log(err)
                        reject(err);
                    } else if (match) {
                        console.log("User: " + user.email + " has logged in.");
                        const data = {
                            email: user.email, 
                            name: user.username
                        }
                        const token = generateToken(data);
                        resolve(token);
                    } else {
                        console.log(`[${newDate()}][Login failed, wrong password][IP:${ip}]`);
                        reject("Wrong password");
                    }
                })
            }
        })
    })
}


function generateToken(user) {
    return jwt.sign({
        data: user
    }, process.env.TOKENSECRET, {
        expiresIn: '2h'
    })
}


function verifyToken(req, res, next) {
    jwt.verify(req.get('Token'), process.env.TOKENSECRET, (err, complete)=>{
        if (complete) {
            res.locals.username = complete.data.name;
            next()
        } else {
            const date = new Date();
            console.log(`[${newDate()}][Proteced route requested but not verified][IP:${req.ip}]`)
            res.status(401).json({error: "Login session is expired"})
        }
    });
}

//Add token blocklist. 

function newDate() {
    return new Date().toLocaleString('en-GB');
}

module.exports = {
    register,
    login,
    verifyToken
}