// File: server/models/Service.js
const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  priceType: {
    type: String,
    enum: ['Hourly', 'Fixed'],
    required: true
  },
  photos: [{
    type: String
  }],
  availability: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Available', 'Unavailable'],
    default: 'Available'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Service', ServiceSchema);
