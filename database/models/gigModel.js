const mongoose = require ('mongoose');

const gigSchema = new mongoose.Schema({
  name: String,
  image: String,
  describe: String,
  description: String,
  is_status: Number,
  user_id: Number,
  is_save: Number,
  price: String,
  popular_id: Number

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

module.exports = mongoose.model('Gig', gigSchema);