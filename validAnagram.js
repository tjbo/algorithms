// frequency counter pattern
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let str1FrequencyCounter = {}
  let str2FrequencyCounter = {}

  for (let key of str1) {
    str1FrequencyCounter[key] = (str1FrequencyCounter[key] || 0) + 1
  }

  for (let key of str2) {
    str2FrequencyCounter[key] = (str2FrequencyCounter[key] || 0) + 1
  }

  // 2nd loops is not nested meaning this function is O(N)
  for (let key in str1FrequencyCounter) {
    if (str1FrequencyCounter[key] !== str2FrequencyCounter[key]) {
      return false
    }
  }

  return true
}

console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram('rat', 'car')) // false
console.log(validAnagram('test', 'test5')) // false
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('awesome', 'awesom')) // false
