const mongoose = require('mongoose');
const ApiError = require('../models/api-error.model');

module.exports.isAuthenticated = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        next(new ApiError('Forbidden', 403));
    }
};

module.exports.isAdmin = (req, res, next) => {
  console.log(req.user)
    if (req.user.role == 'ADMIN') {
        next();
    } else {
        next(new ApiError('Forbidden', 403));
    }
};
