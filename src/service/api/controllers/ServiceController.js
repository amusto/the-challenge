/**
 * ServiceController.js
 *
 * This controller responds to a service invocation with a lucky number.
 * A username must be supplied. Do not change this function!
 */

module.exports = {

  getLuckyNumber: function (req, res) {
    const params = req.allParams();

    if (!params.username) {
      return res.badRequest({
        code: 400,
        error: 'BadRequestError',
        message: 'Parameter [username] is required'
      });
    }

    const luckyNumber = Math.floor(Math.random() * Math.floor(1024));

    return res.ok({
      luckyNumber
    });
  }

};
