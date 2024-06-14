/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
  //Can short circuit if the coutns are garbage
  if(hand.length%groupSize > 0) {
      console.log('bailing')
      return false
  }

  hand.sort((a, b) => a - b);
  //console.log(hand)
  //[ 1, 2, 2, 3, 3, 4, 6, 7, 8]

  let currentHand = []
  let offset = 0
  while(hand.length > 0 && offset <= hand.length-1) {
      console.log(currentHand)
      //console.log('checking: ' + hand[offset])
      if(currentHand.length === 0) {
          currentHand.push(hand.shift());
      } else if(currentHand.length === groupSize) {
          //We need to reset the starting point and currentHand
          //console.log('they\'re equal go next')
          currentHand = []
          offset = 0
      } else if(currentHand[currentHand.length-1] === hand[offset]) {
          //console.log('bumping offset')
          //We have the same value so we need to move up to offset
          offset++
      } else if((currentHand[currentHand.length-1] + 1) === hand[offset]) {
          //this is eactly what we are looking for !
          //console.log('found it')
          const nextItemInHand = (offset === 0)? hand.shift() : hand.splice(offset, 1)[0] 
          currentHand.push(nextItemInHand)
      } else {
          //Since our array is sortedThis means it must be too large, we can short circuit here
          return false
      }
      
  }

  return hand.length === 0
};