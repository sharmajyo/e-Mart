module.exports = function(app, passport) {

    app.get('/auth', function(req, res, next) {
        passport.authenticate('user-login', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send(401, {
                    message: info.message
                });
            } else {
                return res.send(user);
            }
        })(req, res, next);
    });


    app.post('/signup', function(req, res, next) {
        passport.authenticate('user-signup', function(err, user, info) {
            if (err) {
                return next(err);
            }
            if (!user) {
                return res.send(401, {
                    message: info.message
                });
            } else {
                return res.send(user);
            }
        })(req, res, next);
    });


    app.use('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
}
