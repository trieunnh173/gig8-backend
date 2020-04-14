const mongoose = require ('mongoose');

const educationSchema = new mongoose.Schema({
  country: String,
  university_name: String,
  title: String,
  country: String,
  major: String,
  year_of_graduation: String,
  is_status: Number

}, {
    timestamps: true,
    toObject: {
      transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

module.exports = mongoose.model("Education", educationSchema);