function hourglassSum(arr) {
  let max = 0
  
  for (let i=0; i <= 3; i++){

    let max1 = arr[i][0]+arr[i][1]+arr[i][2] +arr[i+1][1] +arr[i+2][0]+arr[i+2][1]+arr[i+2][2]
    let max2 = arr[i][1]+arr[i][2]+arr[i][3] +arr[i+1][2] +arr[i+2][1]+arr[i+2][2]+arr[i+2][3]
    let max3 = arr[i][2]+arr[i][3]+arr[i][4] +arr[i+1][3] +arr[i+2][2]+arr[i+2][3]+arr[i+2][4]
    let max4 = arr[i][3]+arr[i][4]+arr[i][5] +arr[i+1][4] +arr[i+2][3]+arr[i+2][4]+arr[i+2][5]
    
    if(i === 0){
      max = Math.max(max1,max2,max3,max4)
    }else{
      max = Math.max(max,max1,max2,max3,max4)
    }
  }

  return max

}

let arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0]
]
    
let arr2 = [
  [-9, -9, -9, 1, 1, 1], 
  [ 0, -9,  0,  4, 3, 2],
  [-9, -9, -9,  1, 2, 3],
  [ 0,  0,  8,  6, 6, 0],
  [ 0,  0,  0, -2, 0, 0],
  [ 0,  0,  1,  2, 4, 0]
]

console.log("1","exp 19",hourglassSum(arr1))
console.log("2","exp 28",hourglassSum(arr2))


function rotLeft(a, d) { 
  let remainder = d%a.length
  console.log(remainder)
  for (let n=1; n<=remainder; n++){
    let firstElement = a.shift()
    a.push(firstElement)
//    console.log(a)
  }
return a
}

console.log("1","exp [5,1,2,3,4]", rotLeft([1,2,3,4,5],14))
console.log("2","exp [5,1,2,3,4]", rotLeft([1,2,3,4,5],5))
console.log("3","exp [5,1,2,3,4]", rotLeft([1,2,3,4,5],14))


function minimumBribes(q) {
  let bribes = 0
  for (let i=1;i<=q.length;i++){
    let number = q[i-1]
    if (number > i+2){
      return "Too chaotic"
    }
    let diff  = q[i-1]-i
    if (number>i){
      bribes += diff
    }  
  }
  return bribes+net
}

function minimumBribes(q) {
  let bribes = 0
  for (let i=1;i<=q.length;i++){
    let number = q[i-1]
    if (number > i+2){
      return "Too chaotic"
    }

    for(let k=i+1;k<=q.length;k++){
      let target = q[k-1]
      if (number>target){
        bribes++
      }  
    }

  }
  return bribes
}

console.log("1","exp 3",minimumBribes([2, 1, 5, 3, 4]))
console.log("2","exp too chaotic",minimumBribes([2, 5, 1, 3, 4]))
console.log("1","exp too chaotic",minimumBribes([5, 1, 2, 3, 7, 8, 6, 4]))
console.log("2","exp 7",minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]))
console.log("2","exp 4",minimumBribes([1, 2, 5, 3, 4, 7, 8, 6]))
/*
[1,2,3,4,5,6,7,8]
[1,2,5,3,4,6,7,8] 5 bribes 4,3
[1,2,5,3,7,4,6,8] 7 bribes 4,6
[1,2,5,3,7,8,4,6] 8 bribes 4,6
[1,2,5,3,7,8,6,4] 6 bribes 4

1 net 0
2 net 0
3 net -1
4 net -4
5 net +2
6 net -1 (+1 -2)
7 net +2
8 net +2

made +
5 - 2
7 - 2
8 - 2
taken - 
3 - 1
4 - 4
6 - 1

*/


switch (key) {
  case value:
    
    break;

  default:
    break;
}



// 3sum brute force
// O(n^3)
var threeSum = function(nums) {
  let resultArray = []
  // if (typeof nums !== 'object' || (!nums.length && nums.length !== 0)) {
  //     return resultArray
  // }
  if (nums.length < 3) {
      return []
  }
  for (let i = 0; i < nums.length - 2; i++) {
      for (let j = i + 1; j < nums.length - 1; j++) {
          for (let m = j + 1; m < nums.length; m++) {
              if (nums[i] + nums[j] + nums[m] === 0) {
                  resultArray.push([nums[i], nums[j], nums[m]])
              }
          }
      }
  }
  let hashedArrays = {}
  for (let n = 0; n < resultArray.length; n++) {
      let sortedArray = resultArray[n].sort()
      hashedArrays[sortedArray] = resultArray[n]
  }
  return Object.values(hashedArrays)
};
  

// 3sum improved
// O(n^2)

var threeSum = function(nums) {
  let resultArray = []
  if (nums.length < 3) {
      return []
  }
  let hashedNumbers = {}
  let hashedArrays = {}
  hashedNumbers[nums[0]] = 0
  for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
          let difference = 0 - nums[i] - nums[j]
          if ((hashedNumbers[difference] || hashedNumbers[difference] === 0) && hashedNumbers[difference] !== i && hashedNumbers[difference] !== j) {
              let max = Math.max(nums[i], nums[j], difference)
              let min = Math.min(nums[i], nums[j], difference)
              if (!hashedArrays[[max, min]]) {
                  hashedArrays[[max, min]] = true
                  resultArray.push([nums[i], nums[j], difference])
              } 
          }
          hashedNumbers[nums[j]] = j
      }
  }
  return resultArray
};

// Given a collection of intervals, merge all overlapping intervals
// o(n)
var merge = function(intervals) {
    
  const result = [];
  
  if (!intervals || intervals.length === 0) {
      return result;
  }
  
  intervals.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
  
  let current = intervals[0];
  
  for (let i = 1; i < intervals.length; i++) {
      const next = intervals[i];
      
      if (next[0] <= current[1]) {
          current[1] = Math.max(current[1], next[1]);
      } else {
          result.push(current);
          current = next;
      }
  }
  
  result.push(current);
  
  return result;
};


// Given an array of integers greater than 0, find if its possible to split it in two (without redording elements), such that the sum of the two resulting arrays is the same. Print resulting arrays
// O(n)

const testCases = [
  [1,2,3,4,5,6,21],
  [1,90, 50, 30, 5, 3, 2, 1 ],
  [1, 50, 900, 1000 ],
];

function split(arr){
  let target = arr.reduce((acc,num) => acc + num)
  if(target%2 === 0){
    target = target/2
  }else{
    return false
  }
  let sum = 0
  for (let i=0; i<arr.length; i++){
    sum += arr[i]
    if (sum === target){
      return [arr.slice(0,i+1),arr.slice(i+1)]
    }else if (sum > target){
      return false
  }
  }
}

console.log("ans1 true", split(testCases[0]))
console.log("ans2 true", split(testCases[1]))
console.log("ans3 false", split(testCases[2]))