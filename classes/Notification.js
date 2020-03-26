class Notification {
    constructor(schema){
        this.state = 'error'
        this.lang = 'en'
        this.timeout = 6000
        this.schema = schema
    }

    render(id, data){
        const template = this.schema[id]
        if(!template) throw(`"${id}" schema template is not defined!`)
        return template[this.lang](data)
    }

    toJSON() {
        delete this.schema
        return this
    }
}

module.exports = Notification