var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: ""
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
let users = new Array()
function getUsers() {
    var sql = "SELECT * FROM Users"
    con.query(sql, function (err, result) {
        if (err) throw err;
        for (let i = 0; i < result.length; i++) {
            // console.log("username: " + result[i].username + " passwprd: " + result[i].password);
            var user = "username: '" + result[i].username + "' password: '" + result[i].password + "'"
            users.push(user)
            // users.push = {username: result[i].username, password: result[i].password}
        }
        
    });
    console.log(users);
    return users;
}

function saveUser(username, password) {
    var sql = "INSERT INTO Users (username, password) VALUES ('"+username+"','"+password+"')"
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
}

const Users = function() {}

Users.prototype.getUsers = getUsers
Users.prototype.saveUser = saveUser


module.exports = new Users()