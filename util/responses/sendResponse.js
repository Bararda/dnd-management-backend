/**
 * sends the response with the message
 */
module.exports = (res, status, message) => {
    res.status(status).send(message);
}