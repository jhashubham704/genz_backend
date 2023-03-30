const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    id: {
      required: true,
      type: String
    },
    title: {
      required: true,
      type: String
    },
    link: {
      required: true,
      type: String
    },
    discription: {
      required: true,
      type: String
    },
    poster: {
      required: true,
      type: String
    },
    web_url: {
      required: true,
      type: String
    }
  })
  module.exports = mongoose.model('cards', dataSchema)