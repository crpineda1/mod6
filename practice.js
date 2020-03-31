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