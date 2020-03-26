const Notification = require('./classes/Notification')
const Validation = require('./classes/Validation')
const Alert = require('./classes/Alert')
const Schema = require('./classes/Schema')
const dd = (val) => console.log(val)

const schemax = new Schema()

schemax.create('welcome', {
    en: () => `hello there!`,
    zh: () => `你好!`
})

schemax.create('invalid', {
    en: (noun) => `invalid ${noun}!`,
    zh: noun => `${noun}有误!`
})

const schemay = new Schema()

schemay.create('welcomes', {
    en: () => `hello there!`,
    zh: () => `你好!`
})

schemay.create('invalids', {
    en: (noun) => `invalid ${noun}!`,
    zh: noun => `${noun}有误!`
})

const x = schemax.export()
const y = schemay.export()
const z = new Schema()
z.merge({x,y})
dd(z)

const notification = new Notification(schemax.export())
const validation = new Validation({})
const strnot = JSON.stringify(notification)
const strval = JSON.stringify(validation)
// dd({notification, validation})
// dd({strnot, strval})

exports = module.exports = (schema) => (req, res, next) => {
    Notification,
    Validation
}

exports.Notification = Notification
exports.Validation = Validation
exports.Alert = Alert
exports.Schema = Schema