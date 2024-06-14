/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var appendCharacters = function(s, t) {
  let t_ptr = 0
  for(let s_ptr = 0; s_ptr < s.length-1; ++s_ptr) {
      if(t_ptr > t.length - 1) {
          return 0
      }

      if(s[s_ptr] === t[t_ptr]) {
          //pull item  t[pointer] and compare to s[pointer]
          //If they're equal advance both pointers, decrement the count
          //if they're not equal advance the s pointer
          //max--
          t_ptr++
      }
  }

  //Once we are at the end of s it is done
  return t.length-t_ptr
};