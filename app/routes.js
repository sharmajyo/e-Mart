var Product = require('../app/models/product');

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



    app.post('/product', function(req, res) {
        var _product = new Product();
        _product.product.id = req.body.id;
        _product.product.category = req.body.category;
        _product.product.product_name = req.body.product_name;
        _product.product.price = req.body.price;
        _product.product.image = req.body.image;
        
        _product.save(function(err, data) {
            if (err) {
                res.send(err);
            }

            res.send(data);
        });
    });

    app.get('/product', function(req, res) {
        Product.find({}, function(err, data) {
            if (err) {
                res.send(err);
            }
            var productList = [];

            data.forEach(function(data) {
                productList.push(data.product);
            });
            res.send({
                products: productList
            });
        })
    });


    app.use('*', function(req, res) {
        res.sendfile('./public/index.html');
    });
}
