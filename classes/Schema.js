const { isObject } = require('./../utils/functions')

class Schema {
    constructor(){
        this.store = {}
    }

    keys(){
        return Object.keys(this.store)
    }

    exists(id){
        return this.store[id] ? true : false
    }

    export(){
        return this.store
    }

    create(id, definition){
        if(this.exists(id)) throw(`"${id}" schema is already defined!`)
        if(!isObject(definition)) throw(`definition must be of type object!`)
        this.store[id] = definition
        return this
    }
}

module.exports = Schema