const mongoose = require('mongoose');

const tourSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A Tour must have a name'],
    unique: true,
    trim: true
  },
  duration:{
    type: Number,
    required: [true, 'A tour must have a duration']
  },
  maxGroupSize:{
    type: Number,
    required: [true, 'A tour must have a group sieze']
  },
  difficulty:{
    type: String,
    required: [true, 'A tour must have a difficulty']
  },
  ratingsAverage: {
    type: Number,
    default: 4.5
  },
  ratingsQuantity:{
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price']
  },
  priceDiscount: Number,
  summary:{
    type: String,
    trim: true,
    required: [true, 'A tour must have a description']
  },
  description:{
    type: String,
    trim: true
  },
  imageCover:{
    type: String,
    required: [true, 'A tour must have a image cover']
  },
  images: [String],
  createdAt:{
    type: Date,
    default: Date.now()
  },
  startDates:[Date]
});

const Tour = mongoose.model('Tour', tourSchema);

module.exports = Tour;
