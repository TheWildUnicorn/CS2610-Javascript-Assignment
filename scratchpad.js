/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Cmd-R),
 * 2. Inspect to bring up an Object Inspector on the result (Cmd-I), or,
 * 3. Display to insert the result in a comment after the selection. (Cmd-L)
 */
//set title
document.title = 'Jaydon\'s Big Mathinessness';

//create a primary div to hold all the Fib stuff
var primFibDiv = document.createElement('div');
primFibDiv.className = 'parentDiv';
document.body.appendChild(primFibDiv);
//create a primary div to hold all the Pell stuff
var primPellDiv = document.createElement('div');
primPellDiv.className = 'parentDiv';
document.body.appendChild(primPellDiv);
//create a primary div to hold all the Tri stuff
var primTriDiv = document.createElement('div');
primTriDiv.className = 'parentDiv';
document.body.appendChild(primTriDiv);


//run all three sequences
fib(11, primFibDiv);
// pell(11, primPellDiv);
// fib(11, primTriDiv);

var fib = function(n, node) {
  var tree = recursiveFib(n)
  node.appendChild(tree.html);
  //node.style = "display: inline-block;";
  node.setAttribute('id', 'fib');
}

var recursiveFib = function(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'fib');
  // leaf nodes aka. base case
  if (n < 2) {
    if (n === 0) {
      value = 0;
    } 
    else if (n === 1) {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p)
  } 
  else{
    var left = recursiveFib(n - 1);
    var clas = left.html.getAttribute('class');
    left.html.setAttribute('class', clas + ' fib-left');
    var right = recursiveFib(n - 2);
    clas = right.html.getAttribute('class');
    right.html.setAttribute('class', clas + ' fib-right');
    value = left.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Fib(' + n + ') = ' + value;
    div.appendChild(p);
    div.appendChild(left.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}

function pell(n, node){
  var tree = recursivePell(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'pell');
}

function recursivePell(n){
  var value;
  var pellDiv = document.createElement('div');
  pellDiv.setAttribute('class', 'pell');
  if(n < 2){
    if(n === 0){
      value = 0;
    }
    if(n=== 1){
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pellDiv.appendChild(p);
  }
  else{
    var left = recursivePell(n - 1);
    var right = recursivePell(n - 2);
    
  }
}

/*
Exception: ReferenceError: fibHelper is not defined
recursiveFib@file:///users/Jaydon/Desktop/javascriptAssignment/scratchpad.js:55:9
fib@file:///users/Jaydon/Desktop/javascriptAssignment/scratchpad.js:32:14
@Scratchpad/1:27:1
*/
/*
Exception: ReferenceError: fibHelper is not defined
recursiveFib@file:///users/Jaydon/Desktop/javascriptAssignment/scratchpad.js:55:9
fib@file:///users/Jaydon/Desktop/javascriptAssignment/scratchpad.js:32:14
@Scratchpad/1:27:1
*/