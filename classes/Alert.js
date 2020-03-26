const Notification = require('./Notification')
class Alert extends Notification {
    constructor(schema){
        super(schema)
        this.state = 'alert'
        this.timeout = 0
        this.message = '',
        this.actions = []
    }

    create(id, data, actions = [{ label:'', url: ''}]){
        this.message = this.render(id, data)
        this.actions = actions
        return this
    }
}

module.exports = Alert