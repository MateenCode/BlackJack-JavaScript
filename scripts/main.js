/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to
   write your logic.
*/

function handValue (hand) {
  let handTotal = 0;
  let ace = false;

  for(var i = 0; i < hand.length; i++){
    if(hand[i] === 'K' || hand[i] === 'Q'  || hand[i] === 'J'){
      hand[i] = '10'
    }
     if(hand[i] === 'A'){
      hand[i] = '11';
      ace = true;
      if(handTotal > 10){
        hand[i] = 1
      }
    }
    handTotal += Number(hand[i]);

  }
  if(ace = true && handTotal > 21){
     handTotal = handTotal - 10;
  }


  return handTotal;
}


console.log(handValue(["2", "2", "8"]));
console.log(handValue(["2", "2", "K"]));
console.log(handValue(["2", "Q"]));
console.log(handValue(["7", "J"]));
console.log(handValue(["7", "A"]));
console.log(handValue(["8", "J", "A"]));
console.log(handValue(["8", "A", "J"]));
console.log(handValue(["8", "7", "A", "A"]));




/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
