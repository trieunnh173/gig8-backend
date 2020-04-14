const mongoose = require ('mongoose');

const certificationSchema = new mongoose.Schema({
  certification: String,
  certification_from: String,
  year_of_certification: String,
  is_status: String
  
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

module.exports = mongoose.model('certification', certificationSchema);