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


// doesn't work for all cases

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

// convert Roman to number 
// O(n)
var romanToInt = function(s) {
  let sum = 0
    let map = {
      I:1,
      V:5,
      X:10,
      L:50,
      C:100,
      D:500,
      M:1000,
      IV:4,
      IX:9,
      XL:40,
      XC:90,
      CD:400,
      CM:900
    }
    
    if (!s.length){
      return sum
    }
    let i = 0
    while (i < s.length){
        if(map[(s[i]+s[i+1])]){
          sum += map[(s[i]+s[i+1])]
          i+=2               
        }else if (map[s[i]]){
          sum += map[s[i]]
          i++
        }else{
          return "not roman numeral"
        }
    }
  return sum
    
};


// integer to Roman
// O(n) but a bit slow due to the logic
var intToRoman = function(num) {
  const map = {
    1000: "M",
      500: "D",
      100: "C",
       50: "L",
       10: "X",
        5: "V",
        1: "I"
  }
  const keys = [1000,500,100,50,10,5,1]
  let arr = []

  for(let i = 0; i<keys.length;i++){
    let curr = keys[i]
    let prev = keys[i-1]
    let prev2 = keys[i-2]
      
    if(num >= curr){
      let roman = ""
      let div= Math.floor(num/curr)
      if(div === 4){
          if(arr[arr.length-1] === map[prev]){
              arr.pop()
              roman = map[curr]+map[prev2]
          }else{
              roman = map[curr]+map[prev]    
          }
      }else{
        roman =  map[curr].repeat(div)
      }
    arr.push(roman)
    num =  num % curr
    }
  }
    return arr.join("")
      
}

// string to integer (ASCII to integer)
// O(n) but more complex than expected
// https://leetcode.com/problems/string-to-integer-atoi/

var myAtoi = function(str) {

  let symbol = ['+','-']
  let number = ['1','2','3','4','5','6','7','8','9','0']
  let arr = []

  if(!str.length){
    return 0
  }

  for (let i = 0; i<str.length; i++){
    let curr = str[i]
    let next = str[i+1]

    if (number.includes(curr)){
      arr.push(curr)
    }else if(symbol.includes(curr) && number.includes(next)){
      arr.push(curr)   
    }else if(curr === '.'){
      if (!arr.length){
        arr.push('0.')
      }else{
        arr.push(curr)
      }
    }else if(curr === ' '){
      if(arr.length){
        str = ''
      }else{
        null
      }
    }else{
      if(!arr.length){
        return 0
      }else{
        str = ''
      }
    }
  }

  if(!arr.length){
    return 0
  }
  
  let min = Math.pow(-2,31)
  let max = Math.pow(2,31)-1
  let num = parseInt(arr.join(''))
  
  num = Math.min(num,max)
  num = Math.max(num,min)
  return num
}

// string to intiger (ASCII to integer)
// O(n) manipulating input before processing

var myAtoi = function(str) {
  let firstSegment = str.trim().split(' ')[0]
  let num = parseInt(firstSegment)

  if(!num/1){
    return 0
  }

  num = Math.min(num,Math.pow(2,31)-1)
  num = Math.max(num,Math.pow(-2,31))
  
  return num
};

function minimumDistances(a) {
  let map = {}
  let results = []
  for (let i = 0; i<a.length; i++){
    let num = a[i]
    if(map[num] >= 0){
      results.push(i-map[num])
    }else{
      map[num] = i
    }
  }
  return results.length === 0? -1 : Math.min(...results)
}

console.log("expect 3",minimumDistances([7,1,3,4,1,7]))
console.log("expect 1",minimumDistances([7,3,3,4,1,7]))
console.log("expect 5",minimumDistances([7,2,3,4,1,7]))
console.log("expect -1",minimumDistances([9,2,3,4,1,7]))
console.log("expect 2",minimumDistances([7,4,3,4,1,7]))



// Column Sort
// Given a two-dimensional integer matrix, sort each of the columns in ascending order.
// https://binarysearch.io/question/241

// double nested for loop
// O(2n^2)

solve(matrix) {
  let res = []
  let temp= []
  for(let i=0; i<matrix[0].length; i++){
      temp.push([])
      for(let j=0; j<matrix.length; j++){
          temp[i].push(matrix[j][i])
      }
  }
  temp.forEach(arr => arr.sort((a,b)=> a-b))
  
  for(let i=0; i<temp[0].length; i++){
      res.push([])
      for(let j=0; j<temp.length; j++){
          res[i].push(temp[j][i])
      }
  }
  return res
}

// single nested for loop
// O(n^2 +n)?

solve(matrix) {
  for(let i=0; i<matrix[0].length; i++){
      let temp= []
      for(let j=0; j<matrix.length; j++){
          temp.push(matrix[j][i])
      }
      temp.sort((a,b)=> a-b)
      for(let k=0; k<matrix.length; k++){
          matrix[k][i] = temp[k]
      }
  }
  return matrix
}



// AutoComplete
// return words in array that start with string
// https://binarysearch.io/question/11 

// super long attemp
solve(s, words) {
  let resp = []
  let flag
  for (let i = 0; i < words.length; i++) {
      flag = true
      for (let j = 0; j < s.length; j ++) {
          if (s[j] !== words[i][j]) {
              flag = false
          }
      }
      if (flag) {
          resp.push(words[i]);   
      }
  }
  return resp;
}


// refactored second for loop
solve(s, words) {
    let resp = []
    for(let i=0;i<words.length; i++){
        if (words[i].split("").slice(0,s.length).join("") == s){
            resp.push(words[i])
        }
    }
    return resp
}

// refactored split,slice,join with substr
solve(s, words) {
  let resp = []
  for(let i=0;i<words.length; i++){
    if (words[i].substr(0,s.length) == s){
      resp.push(words[i])
      }
  }
  return resp
}

// refactored with startsWith method
solve(s, words) {
  return words.filter(word => word.startsWith(s))
}



// Big Number
// return largest number in row & col in matrix
// https://binarysearch.io/question/423

// O(n^3)
// checking for max of two arrays inside embeded for loop
solve(matrix) {
  let maxes = []
  for(let i=0; i<matrix[0].length; i++){
      let col = []
      for (let j=0; j<matrix.length; j++){
          col.push(matrix[j][i])
      }
      for (let k=0; k<col.length; k++){    
          if(col[k] === Math.max(...col,...matrix[k])){
              maxes.push(col[k])
          }
      }
  }
  return maxes.length
}

// save row maxes first then only tracking colMax in integer
// avoid max of arrays inside embeded for loop -> compare integers

// build array for rowMaxes
// run through column to find colMax
// run again, increase maxes number is equal to both colMax & rowMax of that col

solve(matrix) {
  let maxes = 0
  let rowMaxes = matrix.map(row => Math.max(...row))
  for(let i=0; i<matrix[0].length; i++){
      let colMax = matrix[0][i]
      for (let j=1; j<matrix.length; j++){
          colMax = Math.max(colMax,matrix[j][i])
      }
      for (let k=0; k<matrix.length; k++){    
          if(matrix[k][i] === colMax && matrix[k][i] === rowMaxes[k]){
              maxes++
          }
      }
  }
  return maxes
}

// BST traversal
// https://leetcode.com/problems/kth-smallest-element-in-a-bst/
// Find kth smallest element in BST


//BFS
// creates array of all nodes then sorts array and returns k-1 element
var kthSmallest = function(root, k) {
  let arr = []
  let queue = [root]
  let node
  while(queue.length){
    node = queue.shift()
    if(node.left) queue.push(node.left)
    if(node.right) queue.push(node.right)
    arr.push(node.val)
  }
  console.log(arr)
  arr.sort((a,b) => a-b)
  return arr[k-1]
};
  


// DFS pre-order 
// save all node values in array then sort and return k-1 element
var kthSmallest = function(root, k) {
  let arr = []

  function traverse(node){
      arr.push(node.val)
      if(node.left) traverse(node.left)
      if(node.right) traverse(node.right)
  }

  traverse(root)
  arr.sort((a,b) => a-b)
  return arr[k-1]
} 

// DFS in-order
// realized that DFS by definition returns all nodes from smallest to largest if DFS in-order (no need to sort)
var kthSmallest = function(root, k) {
  let arr = []

  function traverse(node){
      if(node.left) traverse(node.left)
      arr.push(node.val)
      if(node.right) traverse(node.right)
  }

  traverse(root)

  return arr[k-1]
} 


// DFS in-order no saving arr
// no need for arr - just keep counter and node once equal to k, return node.val
var kthSmallest = function(root, k) {
  let counter = 0
  let ans = root
  
  function traverse(node){
      if(node.left) traverse(node.left)
      counter++
      if(counter === k) ans = node
      if(counter>=k) return
      if(node.right) traverse(node.right)
  }
  
  traverse(root)
  
  return ans.val
}