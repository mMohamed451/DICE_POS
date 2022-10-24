const Product = require('./models/product');

// get all products from the database.
exports.findAll = (req, res) => {
  Product.find()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving products."
      });
    });
};

exports.submitProduct = async (req, res) => {
  await Product.create(req.body).then((product) => {
      res.status(200).json({
          message: 'Product Created successfully',
          document: product
      });
  })
      .catch((err) => {
          return res.status(404).json({
              'message': err.message
          });
      });
};