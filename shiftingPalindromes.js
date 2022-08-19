console.log('Test 1');
shiftingPalindrome('racecar');
console.log('Test 2');
shiftingPalindrome('suhbeusheff');
console.log('Test 3');
shiftingPalindrome('palindrome');

function shiftingPalindrome(str){
    var isEven = false;
    var singleLetterFound = false;
    var singleLetter = '';
    var isPalindrome = true;
    
    var strLength = str.length;
    if ((strLength % 2) == 0 ){
      isEven = true;
    }
    for (var i = 0 ; i < strLength ; i++){
      let letter = str.charAt(i);
      let result = ((str.match( new RegExp(letter, 'g') ) || []).length);
      console.log(letter, result);
      if(result % 2 != 0){
        if(singleLetterFound == false){
          singleLetterFound = true;
          singleLetter = letter;
        }
        else if(singleLetterFound == true && letter != singleLetter){
          isPalindrome = false;
        }
      }  
    }
    console.log(isPalindrome);
}
