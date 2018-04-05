const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const sourceSchema = new mongoose.Schema({
    type: {
        type: String,
        required: [true, 'The source type is required']
    },
    name: {
        type: String,
        required: [true, 'The source name is required']
    },
    image: {
        type: String,
        default: ''
    },
    url: {
        type: String,
        default: ''
    },
    //specs: {
        //type: [String],
        //default: []
    //}
}, {
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            ret.id = doc._id;
            delete ret._id;
            delete ret.__v;
            return ret;
        }
    }
 });

 const Source = mongoose.model('Source', sourceSchema);
 module.exports = Source;
