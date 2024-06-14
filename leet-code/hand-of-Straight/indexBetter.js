/**
 * @param {number[]} hand
 * @param {number} groupSize
 * @return {boolean}
 */
var isNStraightHand = function(hand, groupSize) {
    
  if(hand.length%groupSize > 0) {
      //Short circuit if the counts are garbage to save time/space
      return false
  }

  const map = createCardMap(hand)
  for(let [card, count] of map) {
      //We need to avoid iterations that may have been previously decremented
      //Perhaps theres a better way to filter them out but I don't know that 
      //anything else would be faster, my previous impl removed them and was too slow.
      if(count > 0) { //This check avoids that
          for(let i = 1; i < groupSize; ++i) {
              
              if(!map.has(card+i) || map.get(card+i) < count) { //we don't have the card we need or we don't have enough
                  return false
              }
              //We leave the first value dangling but we don't need to worry about it since we will never look back at it
              decrementCardMap(map, card+i, count)
          }
      }
  }

  return true
};


//Decrements the value and returns the new value
var decrementCardMap = function(map, target, amount = 1) {
  const newVal = map.get(target) - amount
  map.set(target, newVal)
  return newVal 
}

var createCardMap = function(hand) {
  //The order it is inserted into the map effects the map's iterable order, so we need to sort it first
  hand.sort((a,b) => a - b)

  const map = new Map()
  hand.forEach((card) => {
      const val = map.get(card) ? map.get(card) + 1 : 1
      map.set(card, val)
  })
  return map
}