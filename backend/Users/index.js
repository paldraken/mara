
module.exports = function(app, db) {

    app.get('/api/users', function(req, res) {
        db.serialize(function() {
            db.all("SELECT id, name FROM users", function(err, rows) {
                if (err)
                    res.json([]);
                else
                    res.json(rows);
            });
        });
    });

    app.post('/api/users', function(req, res) {
        var name = req.body.name.trim();
        if (!name) {
            res.json({ok: false, error: "Empty user name"});
        } else {
            db.serialize(function() {
                var sql = db.prepare("INSERT INTO users(name) VALUES (?)");
                sql.run(name);
                res.json({ok: true})
            });
        }
    });

    app.delete('/api/users/:id', function(req, res) {
        var userId = req.params.id;
        db.serialize(function() {
            var sql = db.prepare("DELETE FROM users where id = ?");
            sql.run(userId, function(err) {
                if(err)
                    res.json({ok: false, error: 'Unable delete record'});
                else
                    res.json({ok: true});
            });
        });
    });

    app.put('/api/users')

};