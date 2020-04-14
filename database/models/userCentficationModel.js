const mongoose = require ('mongoose');

const userCentfication = new mongoose.Schema({
  user_id: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  centification_id: [{ type: Schema.Types.ObjectId, ref: 'certification' }],
  
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

module.exports = mongoose.model('Skill', userCentfication);