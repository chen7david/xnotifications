const Notification = require('./classes/Notification')
const Validation = require('./classes/Validation')
const dd = (val) => console.log(val)


const notification = new Notification({})
const validation = new Validation({})
const strnot = JSON.stringify(notification)
const strval = JSON.stringify(validation)
dd({notification, validation})
dd({strnot, strval})

exports = module.exports = (schema) => (req, res, next) => {
    Notification,
    Validation
}

exports.Notification = Notification
exports.Validation = Validation