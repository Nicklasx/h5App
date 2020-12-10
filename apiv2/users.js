var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "pihl",
    password: "qgd67wdj",
    database: "h5AppApi"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let users = []
function getUsers() {
    var sql = "SELECT * FROM Users"
    con.query(sql, function (err, result) {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            // console.log("username: " + result[i].username + " passwprd: " + result[i].password);
            var user = {username:  result[i].username, password: result[i].password}
            if(users.indexOf(users[i]) !== -1) {

            } else {
                users.push(user)
            }
            // users.push = {username: result[i].username, password: result[i].password}
        }
        
    });
    return users;
}

function saveUser(username, password) {
    var sql = "INSERT INTO Users (username, password) VALUES ('"+username+"','"+password+"')"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

var message;
function login(username, password) {
    // message = "tryhard";
    var sql = "SELECT username, password FROM Users WHERE username = '"+username+"' AND password = '"+password+"'"
    con.query(sql, function (err, result) {
        if(err) {
            console.log(err)
        } else if(result.length < 1) {
            console.log("nope");
            message ="Failed to login";
        } else {
            // console.log(result)
            message = "succes";
        }
        // console.log(message)
        // return message
    })
    console.log(message)
    return message
}

const Users = function() {}

Users.prototype.getUsers = getUsers
Users.prototype.saveUser = saveUser
Users.prototype.login = login


module.exports = new Users()