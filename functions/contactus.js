const axios = require("axios");

require("dotenv").config();

const headers = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "Origin, X-Requested-With, Content-Type, Accept",
  "Content-Type": "application/json",
  "Access-Control-Allow-Methods": "*",
  "Access-Control-Max-Age": 2592000,
  "Access-Control-Allow-Credentials": true
};

exports.handler = function(event, context, callback) {
  const { MAILCHIMP_USER, MAILCHIMP_API_KEY, MAILCHIMP_LIST_ID } = process.env;

  if (event.httpMethod === "OPTIONS") {
    callback(null, { statusCode: "204", headers });
    return;
  }
  if (event.httpMethod === "POST") {
    const { FNAME, LNAME, email_address, MMERGE3 } = JSON.parse(event.body);
    const send = result => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify({
          result: result
        })
      });
    };

    const subscribe = () =>
      axios
        .post(
          `https://us1.api.mailchimp.com/3.0/lists/${MAILCHIMP_LIST_ID}/members`,
          {
            email_address,
            status: "subscribed",
            merge_fields: {
              FNAME,
              LNAME,
              MMERGE3
            }
          },
          {
            auth: {
              username: MAILCHIMP_USER,
              password: MAILCHIMP_API_KEY
            }
          }
        )
        .then(res => send(res.data))
        .catch(err => send(err));

    // Run Subcribe
    return subscribe();
  }
};
