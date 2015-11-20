'use strict';

var _ = require('lodash');
var Dentist = require('./dentist.model');

// Get list of dentists
exports.index = function(req, res) {
  Dentist.find(function (err, dentists) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(dentists);
  });
};

// Get a single dentist
exports.show = function(req, res) {
  Dentist.findById(req.params.id, function (err, dentist) {
    if(err) { return handleError(res, err); }
    if(!dentist) { return res.status(404).send('Not Found'); }
    return res.json(dentist);
  });
};

// Creates a new dentist in the DB.
exports.create = function(req, res) {
  Dentist.create(req.body, function(err, dentist) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(dentist);
  });
};

// Updates an existing dentist in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Dentist.findById(req.params.id, function (err, dentist) {
    if (err) { return handleError(res, err); }
    if(!dentist) { return res.status(404).send('Not Found'); }
    var updated = _.merge(dentist, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(dentist);
    });
  });
};

// Deletes a dentist from the DB.
exports.destroy = function(req, res) {
  Dentist.findById(req.params.id, function (err, dentist) {
    if(err) { return handleError(res, err); }
    if(!dentist) { return res.status(404).send('Not Found'); }
    dentist.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}