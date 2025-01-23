document.addEventListener('DOMContentLoaded', () => {
  var twoSum = function (nums, target) {
    let res = []
    for (let i = 0; i <= nums.length; i++) {
      for (let k = 0; k <= nums.length - 1; k++) {
        if (i != k) {
          if (nums[i] + nums[k] === target) {
            res.push(i)
            res.push(k)
            return res
          }
        }
      }
    }
  }

  console.log(twoSum([2, 7, 11, 15], 9))
  console.log(twoSum([3, 2, 4], 6))
  console.log(twoSum([3, 3], 6))
})
