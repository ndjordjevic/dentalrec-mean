/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Dentist = require('./dentist.model');

exports.register = function(socket) {
  Dentist.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Dentist.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('dentist:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('dentist:remove', doc);
}