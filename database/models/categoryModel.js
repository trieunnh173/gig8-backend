const mongoose = require ('mongoose');

const categorySchema = new mongoose.Schema({
  name: String,
  icon: String,
  parent_id: Number,
  is_new: Number,
  is_status: Number,
  is_order: Number

}, {
    timestamps: true,
    toObject: {
      transform: function(doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return ret;
      }
    }
  }
);

module.exports = mongoose.model('Category', categorySchema);