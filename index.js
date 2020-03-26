const Notification = require('./classes/Notification')
const Validation = require('./classes/Validation')
const dd = (val) => console.log(val)


const notification = new Notification({})
const str = JSON.stringify(notification)
dd(notification)
dd(str)

module.exports = {
    Notification,
    Validation
}