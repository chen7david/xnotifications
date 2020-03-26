
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

#### Usage: Creating Notification

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

#### Usage: Creating Validation

```js
const validation = new Validation(schema)

validation.load('invalid','username', 'username')
validation.load('invalid','password', 'password')
validation.load('invalid','userId', 'user_id')

console.log(validation)
```

```js 
// output of validation
{
  state: 'validation',
  lang: 'en',
  timeout: 6000,
  messages: [
    { message: 'invalid username!', key: 'username' },
    { message: 'invalid password!', key: 'password' },
    { message: 'invalid userId!', key: 'user_id' }
  ]
}
```

#### Usage in Express: Register on as middleware

```js
const xnotif = require('xnotifications')

app.use(xnotif())
``` 

#### Usage in Express: Access in routes
```js
const someExpressRoute = (req, res, next) => {

    // notifications
    req.notify('invalid','username')

    // alert
    req.alert('invalid','username', [
        {
            label:'register', 
            url:'/account/register/'
        }
    ])

    // notifications
    req.validation.load('invalid','username')
    req.validation.load('invalid','password')

}
```