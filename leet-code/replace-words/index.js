/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
var replaceWordsBruteForce = function(dictionary, sentence) {

  //iterate through the dictionary, for each root check the stentence for that and replace it
  // This would be o(dictSize) * o(stentenceSize) 

  const sentanceArr = sentence.split(" ") // O(StentenceSize)

  
  dictionary.forEach((root) => {
      for(let i = 0; i < sentanceArr.length; ++i) {
          if(sentanceArr[i].startsWith(root)) {
              sentanceArr[i] = root
          }
      }
  })

  return sentanceArr.join(" ")


  //Possible optimizations 
  //Can we filter out larger roots ? 
  
};

class Trie {

  //TODO do a trie impl 

  constructor() {
      this.root = new Map()
  }
}

/**
* @param {string[]} dictionary
* @param {string} sentence
* @return {string}
*/
var replaceWordsBruteForce = function(dictionary, sentence) {

  const sentanceArr = sentence.split(" ") // O(StentenceSize)


  return sentanceArr.join(" ")


}