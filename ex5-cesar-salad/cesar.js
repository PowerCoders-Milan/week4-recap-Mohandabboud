// Rewrite the instructions in your own words

// Write the objectives and the tests

// Write the pseudocode

/*    

1- We need to create a text with the alphabet ordered in the right way.
2- we need to prompt for the text.
3- we need to create a list, each item of this list is a letter in the alphabet.
4- we need to create a list from the letters included in the alphabet.
5- now the main job is to replace each letter in the text with the three letter behind in the alphabet.
6- the idea is to make a loop inside a loop
7- the first loop will check the letter in the inserted text
7- the second loop will check the letters in the alphabet and look for a match with the letter in the first loop.
8- then when the loop find a match we create a function to say to replace the letter with three letter behind in the alphabet.
9- create a variable to appendex the letters to another variable.
10- print 

*/



// paste your JS generated by blockly below here

var result, text, list1, text1, list2, i, count, j, result1;


result = '';
text = 'xyzabcdefghijklmnopqrstuvwxyz';
list1 = text.split('');
text1 = window.prompt('write your sentence');
list2 = text1.split('');
for (var i_index in text1) {
  i = text1[i_index];
  count = 0;
  for (var j_index in text) {
    j = text[j_index];
    count = count + 1;
    if (i == j && count >= 4) {
      result1 = text.charAt(((count - 3) - 1));
      result += String(result1);
    }
  }
  if (i == ' ') {
    result += String(i);
  }
}
window.alert(result);
