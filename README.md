
## Getting Started

#### Usage: Creating Schema
```js
const { Schema } = require('xnotifications')

const builder = new Schema()

builder.create('welcome', {
    en: () => `hello there!`,
    zh: () => `你好!`
})

builder.create('invalid', {
    en: (noun) => `invalid ${noun}!`,
    zh: noun => `${noun}有误!`
})

const schema = builder.export()
```
#### Usage: Creating Alert

```js
const alert = new Alert(schema)

alert.create('invalid','username', [
    {
        label:'register', 
        url:'/account/register/'
    }
])

console.log(alert)
```


```js 

// output

{
  state: 'alert',
  lang: 'en',
  timeout: 0,
  message: 'invalid username!',
  actions: [
       {
           label: 'register', 
           url: '/account/register/'
       }
  ]
}
```

#### Usage: Creating Alert

```js
const note = new Notification(schema)

note.create('invalid','username')

const withSate = note.create('invalid','username', 'info')

console.log(note)
console.log(withSate)
```


```js 

// output of note

{
  state: 'error',
  lang: 'en',
  timeout: 6000,
  message: 'invalid username!'
}

// output of withSate

{
  state: 'info',
  lang: 'en',
  timeout: 6000,
  message: 'invalid username!'
}
```

