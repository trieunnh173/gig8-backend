const mongoose = require ('mongoose');

const popularSchema = new mongoose.Schema({
  sub_title: String,
  title: String,
  images: String 
  
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

module.exports = mongoose.model('Category', popularSchema);