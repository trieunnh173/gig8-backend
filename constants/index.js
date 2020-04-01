module.exports = {
  defaultServerResponse: {
    status: 400,
    message: '',
    body: {}
  },
  productMessage: {
    PRODUCT_CREATED: 'Product Created Successfully',
    PRODUCT_FETCHED: 'Product Fetched Successfully',
    PRODUCT_NOT_FOUND: 'Product Not Found',
    PRODUCT_UPDATED: 'Product Update Successfully',
    PRODUCT_DELETED: 'Product Delete Successfully',
  },
  userMessage: {
    SIGNUP_SUCCESS: 'Signup Success',
    DUPLICATE_EMAIL: 'User already exist with given email',
    LOGIN_SUCCESS: 'Login Success',
    USER_NOT_FOUND: 'User not found',
    INVALID_PASSWORD: 'Invalid password'
  },
  requestValidationMessage: {
    BAD_REQUEST: 'Invalid field',
    TOKEN_MISSING: 'Token missing from header'
  },
  databaseMessage: {
    INVALID_ID: "Invalid Id"
  }
}