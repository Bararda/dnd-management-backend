/**
 * sends the response with the message
 */
module.exports = (res, status, message) => {
    if(message) {
        res.status(status).send(message);
    } else {
        res.sendStatus(status);
    }
}