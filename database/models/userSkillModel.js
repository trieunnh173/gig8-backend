const mongoose = require ('mongoose');

const popularSchema = new mongoose.Schema({
  user_id: [{ type: Schema.Types.ObjectId, ref: 'Users' }],
  skil_id: [{ type: Schema.Types.ObjectId, ref: 'Skills' }],

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

module.exports = mongoose.model('UserSkill', popularSchema);