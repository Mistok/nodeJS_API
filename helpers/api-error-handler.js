const errorHandler = (res, e) => {
 res.status(500).send(e.message)
}

module.exports = errorHandler;