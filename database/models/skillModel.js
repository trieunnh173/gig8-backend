const mongoose = require ('mongoose');

const skillSchema = new mongoose.Schema({
  name: String,
  level: String,
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

module.exports = mongoose.model('Skill',skillSchema);