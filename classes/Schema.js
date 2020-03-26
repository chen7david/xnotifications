const { isObject } = require('./../utils/functions')

class Schema {
    constructor(schema){
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

    load(schema){
        for (let [id, definition] of Object.entries(schema)) {
            this.create(id, definition)
        }
        return this
    }

    merge(schemas){
        if(!isObject(schemas)) throw(`schemas must be of type object!`)
        for (let [id, schema] of Object.entries(schemas)) {
            this.load(schema)
        }
        return this
    }
}

module.exports = Schema