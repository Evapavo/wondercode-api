const mongoose = require('mongoose');
const Source = require('../models/source.model');
const ApiError = require('../models/api-error.model');

module.exports.list = (req, res, next) => {
  Source.find()
    .then(sources => res.json(sources))
    .catch(error => next(error));
}

module.exports.get = (req, res, next) => {
  const id = req.params.id;
  Source.findById(id)
    .then(source => {
      if (source) {
        res.json(source)
      } else {
        next(new ApiError(`Source not found`, 404));
      }
    }).catch(error => next(error));
}

module.exports.create = (req, res, next) => {
  const source = new Source(req.body);
  if (req.file) {
    source.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }
  source.save()
    .then(() => {
      res.status(201).json(source);
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    })
}

module.exports.delete = (req, res, next) => {
  const id = req.params.id;
  Source.findByIdAndRemove(id)
    .then(source => {
      if (source) {
        res.status(204).json()
      } else {
        next(new ApiError(`Source not found`, 404));
      }
    }).catch(error => next(error));
}

module.exports.edit = (req, res, next) => {
  const id = req.params.id;
  if (req.file) {
    body.image = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
  }

  Source.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    .then(source => {
      console.log(source)
      if (source) {
        res.json(source)
      } else {
        next(new ApiError(`Source not found`, 404));
      }
    }).catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        next(new ApiError(error.message, 400, error.errors));
      } else {
        next(new ApiError(error.message, 500));
      }
    });
}
