const o = new Object()
o.firstName = "Carl"
o.lastName = "kakisis"
o.isTeaching = false
o.greet = function() {
    console.log("Hi!")
}

const o2 = {} 
o.firstName = 'Carl'
o['lastName'] = 'Kakisis'
const key = "notTeaching"
o[key] = true
o['greet'] = function() {
    console.log('hi')
}

const o3 = {
    1: "test",
    firstName: 'Carl',
    lastName: 'Kakisis',
    isTeaching: false,
    greet: function() {
        console.log('hi')
    },
    address: {
        street: 'Main St',
        number: 333
    }
}

console.log(o3.address)
console.log(o3.address.number)
console.log(o3[1])