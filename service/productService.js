const Product = require('../database/models/productModel');
const {formatMongoData, checkObjectId } = require('../helper/dbHelper');
const contants = require('../constants');

module.exports.createProduct = async (serviceData) => {
  try {
    let product = new Product({ ...serviceData });
    let result =  await product.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Error Service Create Product', error);
    throw new Error(error);
  }
}

module.exports.getAllProduct = async({ skip = 0, limit = 10 }) => {
  try {
    let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
    return formatMongoData(products);
  } catch (error) {
    console.log('Error Service Get All Product', error);
    throw new Error(error);
  }
}

module.exports.getProductById = async({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findById(id);
    if (!product) {
      throw new Error(contants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Error Service Get All Product', error);
    throw new Error(error);
  }
}

module.exports.updateProduct = async({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let product = await Product.findOneAndUpdate(
      {_id: id},
      updateInfo,
      {new: true}
    )
    if (!product) {
      throw new Error(contants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Error Service Get Update Product', error);
    throw new Error(error);
  }
}

module.exports.deleteProduct = async({ id }) => {
  try {
    checkObjectId(id);
    let product = await Product.findByIdAndDelete(id)
    if (!product) {
      throw new Error(contants.productMessage.PRODUCT_NOT_FOUND);
    }
    return formatMongoData(product);
  } catch (error) {
    console.log('Error Service Get Delete Product', error);
    throw new Error(error);
  }
}