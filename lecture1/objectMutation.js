const o = {
    a: 'a',
    b: 'b',
    obj: {
        key: 'key'
    }
}

// const o2 = Object.assign({}, o)

// o2.obj.key = 'new value'

// console.log(o.obj.key)

// o.a = 'new value'

// console.log(o2.a)

// deep copy
function deepCopy(obj) {
    // check if vals are objects if so, copy that object (deep copy) else return the value
    const keys = Object.keys(obj)

    const newObject = {}

    for (var i = 0; i < keys.length; i++) {
        const key = keys[i]
        if (typeof obj[keys[i]] === 'object') {
            newObject[key] = deepCopy(obj[key])
        } else {
            newObject[key] = obj[key]
        }
    }
    return newObject
}

const o3 = deepCopy(o)

o.obj.key = 'new key!'
console.log(o3.obj.key)