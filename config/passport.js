// load all the things we need
var LocalStrategy = require('passport-local').Strategy;

// load up the user model
var User = require('../app/models/user');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('user-signup', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) {

            process.nextTick(function() {

                User.findOne({
                    'local.email': email
                }, function(err, user) {
                    if (err)
                        return done(err);

                    if (user) {
                        return done(null, false, {
                            message: 'That email is already taken.'
                        });
                    } else {

                        var newUser = new User();

                        newUser.local.email = email;
                        newUser.local.password = newUser.generateHash(password);

                        // save the user
                        newUser.save(function(err) {
                            if (err)
                                throw err;
                            return done(null, newUser);
                        });
                    }

                });

            });

        }));
    passport.use('user-login', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },
        function(req, email, password, done) { // callback with email and password from our form

            User.findOne({
                'local.email': email
            }, function(err, user) {
                if (err)
                    return done(err);

                if (!user)
                    return done(null, false, {
                        message: 'Incorrect username.'
                    }); // req.flash is the way to set flashdata using connect-flash

                if (!user.validPassword(password))
                    return done(null, false, {
                        message: 'Incorrect password.'
                    }); // create the loginMessage and save it to session as flashdata

                return done(null, user);
            });

        }));


};
