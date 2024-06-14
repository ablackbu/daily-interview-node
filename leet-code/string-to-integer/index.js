/**
 * @param {string} s
 * @return {number}
 */

const MAX_INT = 2**31 -1
const MIN_INT = -1 *(2**31)

var myAtoi = function(s) {
    const parsed = parseInt(s)
    if(isNaN(parsed)) {
        return 0
    }
    
    if(parsed > MAX_INT) {
        return MAX_INT
    }
    if(parsed < MIN_INT) {
        return MIN_INT
    }
    return parsed
}
//I know this probably know what they "want" but frankly you should use the tools available and this is.
