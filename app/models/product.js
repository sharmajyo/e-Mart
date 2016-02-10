var mongoose = require('mongoose');

var productSchema = mongoose.Schema({
	product: {
		id:{ type: String, required: true },
        category: { type: String, required: true },
        product_name: { type: String, required: true },
        price:{ type: Number, required: true }, 
        image:{ type: String}
    }
})

module.exports = mongoose.model('Product',productSchema)