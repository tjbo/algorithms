// frequency counter pattern
// no nested loops meaning this function is O(N)
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  let str2FrequencyCounter = {}

  for (let key of str1) {
    str1FrequencyCounter[key] = (str1FrequencyCounter[key] || 0) + 1
  }

  for (let key of str2) {
    str2FrequencyCounter[key] = (str2FrequencyCounter[key] || 0) + 1
  }

  for (let key in str1FrequencyCounter) {
    if (str1FrequencyCounter[key] !== str2FrequencyCounter[key]) {
      return false
    }
  }

  return true
}

validAnagram('anagram', 'nagaram') // true
validAnagram('rat', 'car') // false
validAnagram('test', 'test5') // false
validAnagram('aaz', 'zza') // false
validAnagram('awesome', 'awesom') // false
