// 1. hash tables are used to store key/value pairs
// 2. unlike arrays hash tables are fast for all of the following
// operations: finding, adding and removing
// 3. js has objects and maps which can be used for hash tables
// 4. js has no natives for a hashing function
// 5. objects have some restrictions but are basically hash tables
// 6. in this example we will use an array to build our own hash table
// soley to understand the fundamentals
// 7. Big O (average)
// insert = O(1)
// deletion = O(1)
// access = O(1)
// 8. If your hash function sucks Big O will be O(N), better to just use
// a pre-existing hashing function
// 9. A good hash should be fast, distribute keys uniformly, and be deterministic

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

  keys() {
    return this.keyMap.flatMap((arr) => {
      return arr.flat()[0]
    })
  }

  values() {
    return this.keyMap.flatMap((arr) => {
      return arr.flat()[1]
    })
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
table.set('orange', '#cc1111')
table.set('green', '#cc2222')
table.set('red', '#cc0000')

const keys = table.keys()
const values = table.values()

debugger
