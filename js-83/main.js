const me = {
    name: 'Lera',
    age: 17,
    timeLearning: '2 Months',
    jsEasyForMe: 'ABSOLUTELY NO',
    sayHello(name) {
        return `Hello ${name}`
    }
}
console.log(me)

console.log(me.sayHello('Альбертино'))


const users = [
    {
        name: 'Marlin',
        age: 38,
        isAdmin: false
    },
    {
        name: 'Joel',
        age: 45,
        isAdmin: true
    },
    {
        name: 'Elli',
        age: 20,
        isAdmin: true
    },
    {
        name: 'Dina',
        age: 18,
        isAdmin: false
    }
]

let noVip = 0

for (let i = 0; i < users.length; i++) {
    if (users[i].isAdmin === false) {
        noVip++
    }
}
console.log(noVip)