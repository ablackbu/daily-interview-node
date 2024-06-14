/**
 * @param {string} word
 * @return {boolean}
 */
var equalFrequency = function(word) {
  const OFFSET = 97

  //if they're all equal its false
  const letterCount = new Array(26).fill(0) //O(26) space

  for(let i = 0; i < word.length; ++i) { //o (word.length) time
      letterCount[word.charCodeAt(i)-OFFSET]++
  }

  const letterFrequency = []
  for(let i = 0; i < letterCount.length; ++i) {
    letterFrequency[letterCount[i]] = 
  }

  const filteredLetters = letterCount.filter((e) => e > 0) // O (26) time /O 26 space

  let hasSingleToRemove = false
  let currentChanges = 0
  for(let i = 0; i < filteredLetters.length-1; ++i) { //O (26)
      const current = filteredLetters[i] 
      if(!hasSingleToRemove) {
          //need to be ok with removing a single char
          hasSingleToRemove = current === 1
      }

      if(i%2 == 0) {
        currentChanges += current
      } else {
        currentChanges -= current
      }
  }

};


const result = equalFrequency('bbac')
console.log(result)