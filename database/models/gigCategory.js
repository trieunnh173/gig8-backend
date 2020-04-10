const mongoose = require ('mongoose');

const gigCategorySchema = new mongoose.Schema({
  gig_id: Number,
  category_id: Number

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

module.exports = mongoose.model('Category', gigCategorySchema);