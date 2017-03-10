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
pell(11, primPellDiv);
trib(11, primTriDiv);
//Let credit be given to Erik Falor whose work heavily influenced the following code
function fib(n, node) {
  var tree = recursiveFib(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'fib');
}
function recursiveFib(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'childDiv');
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
    div.appendChild(p);
  } 
  else {
    var left = recursiveFib(n - 1);
    var divClass = left.html.getAttribute('class');
    left.html.setAttribute('class', divClass + ' leftChild');
    var right = recursiveFib(n - 2);
    divClass = right.html.getAttribute('class');
    right.html.setAttribute('class', divClass + ' rightChild');
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
function pell(n, node) {
  var tree = recursivePell(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'pell');
}
function recursivePell(n) {
  var value;
  var pellDiv = document.createElement('div');
  pellDiv.setAttribute('class', 'childDiv');
  if (n < 2) {
    if (n === 0) {
      value = 0;
    }
    if (n === 1) {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pellDiv.appendChild(p);
  } 
  else {
    var left = recursivePell(n - 1);
    var divClass = left.html.getAttribute('class');
    left.html.setAttribute('class', divClass + ' leftChild');
    var right = recursivePell(n - 2);
    divClass = right.html.getAttribute('class');
    right.html.setAttribute('class', divClass + ' rightChild');
    value = (left.value * 2) + right.value;
    var p = document.createElement('p');
    p.textContent = 'Pell(' + n + ') = ' + value;
    pellDiv.appendChild(p);
    pellDiv.appendChild(left.html);
    pellDiv.appendChild(right.html);
  }
  return {
    'value': value,
    'html': pellDiv
  };
}
function trib(n, node) {
  var tree = recursiveTrib(n);
  node.appendChild(tree.html);
  node.setAttribute('id', 'trib');
}
function recursiveTrib(n) {
  var value;
  var div = document.createElement('div');
  div.setAttribute('class', 'childDiv');
  // leaf nodes aka. base case
  if (n < 3) {
    if (n === 0) {
      value = 0;
    } 
    else if (n === 1 || n === 2) {
      value = 1;
    }
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    div.appendChild(p);
  } 
  else {
    var left = recursiveTrib(n - 1);
    var divClass = left.html.getAttribute('class');
    left.html.setAttribute('class', divClass + ' leftChild');
    var center = recursiveTrib(n - 2);
    divClass = center.html.getAttribute('class');
    center.html.setAttribute('class', divClass + ' centerChild');
    var right = recursiveTrib(n - 3);
    divClass = right.html.getAttribute('class');
    right.html.setAttribute('class', divClass + ' rightChild');
    value = left.value + center.value + right.value;
    var p = document.createElement('p');
    p.textContent = 'Trib(' + n + ') = ' + value;
    div.appendChild(p);
    div.appendChild(left.html);
    div.appendChild(center.html);
    div.appendChild(right.html);
  }
  return {
    'value': value,
    'html': div
  };
}

var style = document.createElement('style');
style.textContent = '.parentDiv{' +
'\tborder-style: solid;' +
'\tborder-color: white;' +
'\tborder-radius: 10px;' +
'\tborder-width: 2px;' +
'\tmargin: 10px;' +
'\tpadding: 3px;' +
'}' +
'#fib{' +
'\tbackground-color: #BDFFFD;' +
'\twidth: 17000px;' +
'}' +
'#pell{' +
'\tbackground-color: #7CFFC4;' +
'\twidth: 17500px;' +
'}' +
'#trib{' +
'\tbackground-color: #9FFFF5;' +
'\twidth: 39000px;' +
'}' +
'' +
'.childDiv{' +
'\tdisplay: inline-block;' +
'\tbackground-color: rgba(94,105,115,0.09);' +
'\tborder-radius: 5px;' +
'\tmargin: 10px;' +
'\tpadding: 3px;' +
'\ttext-align: center;' +
'}' +
'.leftChild{' +
'\tfloat: left;' +
'}' +
'.rightChild{' +
'\tfloat: right;' +
'}' +
'/*This presents problems with Webkit browsers. There is no \'float: center;\' The div gets wrapped to the next line.*/' +
'.centerChild{' +
'\tfloat: none;' +
'}';
document.querySelector('body').appendChild(style);
