const Category = require('../database/models/categoryModel');
const {formatMongoData, checkObjectId } = require('../helper/dbHelper');
const contants = require('../constants');

module.exports.createCategory = async (serviceData) => {
  try {
    let category = new Category({ ...serviceData });
    let result =  await category.save();
    return formatMongoData(result);
  } catch (error) {
    console.log('Error Service Create Category', error);
    throw new Error(error);
  }
}


module.exports.getAllCategory = async(serviceData) => {
  try {
    let category = await Category.find({});
    return formatMongoData(category);
  } catch (error) {
    console.log('Error Service Get All Category', error);
    throw new Error(error);
  }
}