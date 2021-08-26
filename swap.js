// this could be written in a fancier way in es5 or es6
// however I believe this old schoolz way to be more readable

module.exports = function (arr, idx1, idx2) {
  let temp = arr[idx1]
  arr[idx1] = arr[idx2]
  arr[idx2] = temp
}
