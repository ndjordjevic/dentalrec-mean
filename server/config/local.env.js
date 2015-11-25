'use strict';

// Use local.env.js for environment variables that grunt will set when the server starts locally.
// Use for your api keys, secrets, etc. This file should not be tracked by git.
//
// You will need to set these on the server you deploy to.

module.exports = {
  DOMAIN:           'http://127.0.0.1:9000',
  SESSION_SECRET:   'dentalrecmean-secret',

  GOOGLE_ID:        '932074325384-si6a3eq7c1ikn7q3af9qda3q4ero8oc0.apps.googleusercontent.com',
  GOOGLE_SECRET:    'g6npfoNiV3plDFVGp-B5n0ff',

  // Control debug level for modules using visionmedia/debug
  DEBUG: ''
};
