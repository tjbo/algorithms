// hash tables are used to store key/value pairs
// unlike arrays hash tables are fast all of the following
// operations: finding, adding and removing
// js has objects and maps for hash tables
// js has no natives for a hashing function
// objects have some restrictions but are basically hash tables
// in this example we will use an array to build our own hash table
// soley to understand how they work

class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size)
  }

  _hash(key) {
    let total = 0
    const WEIRD_PRIME = 31
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length
    }
    return total
  }

  get(key) {
    const hash = this._hash(key)
    if (!!this.keyMap[hash]) {
      return this.keyMap[hash].filter((item) => {
        return item[0] === key
      })[0]
    }
    return
  }

  set(key, value) {
    const hash = this._hash(key)
    const existingArr = this.keyMap[hash] || []
    this.keyMap[hash] = [...existingArr, [key, value]]
  }
}

const table = new HashTable()
table.set('blue', '#cc9000')
table.set('blue', '#cc1111')
table.set('green', '#cc1111')
table.set('red', '#cc0000')

const key = table.get('red')

debugger
