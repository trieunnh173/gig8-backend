const mongoose = require ('mongoose');

module.exports = async() => {
  try {
    await mongoose.connect(process.env.DB_URL, {useNewUrlParser: true});
    console.log('Database Connected Succcess');
  } catch (error) {
    console.log('Database Error', error);
    throw new Error(error)
  }
}