module.exports = (res, status, message) => {
    res.status(status).send(message);
}