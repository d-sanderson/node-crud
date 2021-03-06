const Product = require('../models/product.model');

exports.product_create = function (req, res) {
  let product = new Product(
      {
          name: req.body.name,
          price: req.body.price
      }
  );

  product.save(function (err) {
      if (err) {
          return next(err);
      }
      res.send('Product Created successfully')
  })

};

exports.product_details = function (req, res) {
  Product.findById(req.params.id, function (err, product) {
      if (err) return next(err);
      res.send(product);
  })
};

exports.product_update = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, {$set: req.body},
    function (err) {
      if(err) return next(err);
      res.send('Product Updated.')
    });
};

exports.product_delete = (req, res) => {
  Product.findByIdAndRemove(req.params.id,
    function (err) {
      if(err) return next(err);
      res.send('Deleted Successfully!')
    });
};