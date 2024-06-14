

var addToMap = function(letter, map) {
  map[letter] = map[letter] ? map[letter] + 1 : 1
}

var getWordInMap = function(word) {
  const map = {}
  word.split('').forEach((char) => addToMap(char, map))
  return map
}

var mapToArray = function(map) {
  return Object.entries(map).reduce((acc, [letter, count]) => {
      return acc.concat(new Array(count).fill(letter))
  }, [])
}

/**
* @param {string[]} words
* @return {string[]}
*/
var commonChars = function(words) {
  if(words.length == 0) {
      return []
  }

  let unionMap
  for(let i = 0; i < words.length; ++i) {
      const iMap = getWordInMap(words[i])
      if(!unionMap) {
          //Need to get the base dataset to compare to. 
          unionMap = iMap
      } else {
          //We need to compare these maps
          Object.entries(unionMap).forEach((entry) => {
              const [letter, amount] = entry
              if(!iMap[letter]) { //Its not there we need to remove it
                  delete unionMap[letter]
              } else {
                  
                  unionMap[letter] = Math.min(amount, iMap[letter])
              }
          })
      }

      console.log(unionMap)
      if(Object.keys(unionMap).length == 0) {
          return []
      }
  }
  
  
  return mapToArray(unionMap)

  //if we need everything then we can loop through each word
  //remove from the list things that aren't in the new word
  //until we have all the words or all the characters are gone
  
  //inital set should be the first word letters with counts
  //each iteration 

  //b 1
  //e 1
  //l 2
  //a 1

  //issues with duplicates 
  
};