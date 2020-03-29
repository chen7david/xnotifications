const Notification = require('./Notification')
class Validation extends Notification {
    constructor(schema){
        super(schema)
        this.state = 'validation'
        this.messages = []
        
    }

    original(original){
        this.original = original
        return this
    }

    load(id, data, key){
        this.messages.push({
            message: this.render(id, data),
            key
        })
        return this
    }
}

module.exports = Validation