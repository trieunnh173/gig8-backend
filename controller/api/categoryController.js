const categoryService = require('../../service/categoryService');
const constants = require('../../constants');


module.exports.createCategory = async (req, res) => {
  let response = {...constants.defaultServerResponse};
  try {
    const responseFromService = await categoryService.createCategory(req.body);
    response.status = 200;
    response.message = constants.categoryMessage.CATEGORY_CREATED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: Category Product', error);
    response.message = error.message;
  }

  return res.status(response.status).send(response);
}

module.exports.getAllCategory = async (req, res) => {
  let response = {...constants.defaultServerResponse};
  try {
    const responseFromService = await categoryService.getAllCategory(req.query);
    response.status = 200;
    response.message = constants.categoryMessage.CATEGORY_FETCHED;
    response.body = responseFromService;
  } catch (error) {
    console.log('Something went wrong: Controller: getAllCategory', error);
    response.message = error.message;
  }

  return res.status(response.status).send(response);
}