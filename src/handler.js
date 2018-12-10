'use strict';

module.exports.endpoint = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
};

module.exports.landingPage = (event, context, callback) => {
    var dynamicHtml = '<p>Hey Unknown!</p>';
    // check for GET params and use if available
    if (event.queryStringParameters && event.queryStringParameters.name) {
        dynamicHtml = `<p>Hey ${event.queryStringParameters.name}!</p>`;
    }

    var html = '<html><style>h1 { color: #73757d; }</style><body><h1>Landing Page</h1>${dynamicHtml}</body></html>';

    var response = {
        statusCode: 200,
        headers: {
            'Content-Type': 'text/html',
        },
        body: html,
    };

    // callback is sending HTML back
    callback(null, response);
};