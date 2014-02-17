var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('db/project.sqlite');

db.serialize(function() {
//    db.run("CREATE TABLE users (id INTEGER PRIMARY KEY ASC, name TEXT)");
//    db.run("insert into users(name) values('Иванов')");

    db.each("SELECT id, name FROM users", function(err, row) {
        console.log(row.id + ": " + row.name);
    });

});

db.close();