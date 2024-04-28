const responses = require('./responses')

const errors = (err, req, res, next) => {
    console.error('error', err)

    const message = err.message || 'error'
    const status = err.status || 500

    responses.error(req, res, message, status)
}

module.exports = errors