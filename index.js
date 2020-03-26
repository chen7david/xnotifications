const Notification = require('./classes/Notification')
const Validation = require('./classes/Validation')
const Alert = require('./classes/Alert')
const Schema = require('./classes/Schema')

exports = module.exports = (schema) => (req, res, next) => {
    req.notify = (id, data, state) => new Notification(schema).create(id, data, state)
    req.alert = (id, data, action) => new Alert(schema).create(id, data, action)
    req.validation = new Validation(schema)
}

exports.Notification = Notification
exports.Validation = Validation
exports.Alert = Alert
exports.Schema = Schema