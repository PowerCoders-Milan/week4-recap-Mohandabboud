// Rewrite the instructions in your own words

// Write the objectives and the tests

// Write the pseudocode

/* 

1- We need to prompt the user to enter his choice.
2- We need to generate a random word by the computer : rock or paper or scissors.
3- We need to compare between the two choices and check who wins.
4- We need a loop to replaying the game until either the user or the computer win 3 times.
5- print the win or loose message.

*/



// paste your JS generated by blockly below here

var seven, eight, nine, one, two, three, four, five, six;

function listsGetRandomItem(list, remove) {
  var x = Math.floor(Math.random() * list.length);
  if (remove) {
    return list.splice(x, 1)[0];
  } else {
    return list[x];
  }
}


seven = 1;
eight = 0;
nine = 0;
while (!false) {
  one = ['paper', 'scissors', 'rock'];
  two = listsGetRandomItem(one, false);
  three = window.prompt('TO play, Choose rock or paper or scissors');
  four = 'You win';
  five = 'You lose';
  six = 'tie';
  if (three == 'rock' && two == 'rock') {
    window.alert(six);
    seven = seven + 1;
  }
  if (three == 'rock' && two == 'scissors') {
    window.alert(four);
    seven = seven + 1;
    eight = eight + 1;
    if (eight == 3) {
      window.alert('Good job! You win 3-2');
      break;
    }
  }
  if (three == 'rock' && two == 'paper') {
    window.alert(five);
    seven = seven + 1;
    nine = nine + 1;
    if (nine == 3) {
      window.alert('You lose 1-3. Try again!"');
      break;
    }
  }
  if (three == 'paper' && two == 'rock') {
    window.alert(four);
    seven = seven + 1;
    eight = eight + 1;
    if (eight == 3) {
      window.alert('Good job! You win 3-2');
      break;
    }
  }
  if (three == 'paper' && two == 'scissors') {
    window.alert(five);
    seven = seven + 1;
    nine = nine + 1;
    if (nine == 3) {
      window.alert('You lose 1-3. Try again!"');
      break;
    }
  }
  if (three == 'paper' && two == 'paper') {
    window.alert(six);
    seven = seven + 1;
  }
  if (three == 'scissors' && two == 'rock') {
    window.alert(five);
    seven = seven + 1;
    nine = nine + 1;
    if (nine == 3) {
      window.alert('You lose 1-3. Try again!"');
      break;
    }
  }
  if (three == 'scissors' && two == 'scissors') {
    window.alert(six);
    seven = seven + 1;
  }
  if (three == 'scissors' && two == 'paper') {
    window.alert(four);
    seven = seven + 1;
    eight = eight + 1;
    if (eight == 3) {
      window.alert('Good job! You win 3-2');
      break;
    }
  }
  window.alert('round number' + String(seven));
}
