function stickers_for(phrase) {
  let target = {}
  let arr =  phrase.split('')
  for(let letter of arr){
      if (letter !== ' '){
        target[letter] = (target[letter] || 0) + 1
      }
  }
 target['a'] = Math.ceil(target['a']/2)
 
 const ref = ['i','n','s','t','a','g','r','m']
 let max = 0
 for(let letter of ref){
  if (target[letter]){
     max = Math.max(target[letter], max)
  }
 }
 return max
}

const phrase = "artisan martians"
console.log(stickers_for(phrase))
console.log(stickers_for("iii"))
console.log(stickers_for("taming giant gnats"))

function funWithAnagrams(text) {
  // Write your code here
  let ref = {}
  let answer = []
  text.forEach((text,i) =>{
      let arr = text.split('')
      ref[i] = arr.sort().join('')
  })
  for (let i = 0; i<text.length; i++){
    for (let k = i+1; k<text.length; k++){
        if (ref[k] === ref[i]){
            delete ref[k]
        }
    }
  }
  
for(let i = 0; i<Object.keys(ref).length; i++){
  answer[i] = text[i]
  }
  return answer.sort()

}

const blah = ['code', 'aaagmnrs', 'anagrams', 'doce']
console.log("ans",funWithAnagrams(blah))


// battleship lenght = 3
// field  lenght/width =  n >3
// . . . .
// . . . .
// . . . .
// . . . .

function dropBomb (coordinates){} // given function to check it bomb hits ship

function sinkShip(field){

}

