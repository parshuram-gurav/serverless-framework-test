'use strict';

exports.http = (request, response) => {
  response.status(200).send('Hello Serverless Deployed by serverless framework');
};

exports.event = (event, callback) => {
  callback();
};




