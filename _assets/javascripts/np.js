var s = Snap("#svg");

var N = s.select("#N");
var O = s.select("#O");
var A = s.select("#A");
var H = s.select("#H");

var P = s.select("#P");
var R = s.select("#R");
var E = s.select("#E");
var S = s.select("#S");
var C = s.select("#C");
var O2 = s.select("#O2");
var T = s.select("#T");
var T2 = s.select("#T2");

var allLetters = Snap.selectAll(".letter")

function setAttr(letter) {

  var length = letter.getTotalLength();

  letter.attr({
    'stroke-dasharray': length,
    'stroke-dashoffset': length,
    'stroke': "#000",
    'stroke-width': 0.5,
    'fill-opacity': 0,
  })

}

function setAllLetters(elem, idx, arra) {
  setAttr(elem);
}

allLetters.forEach(setAllLetters);

// step 1 - create an empty array and grab the elements to animate
var tweens = [],
  tweens2 = [],
  tweens3 = [],
  myElements = document.getElementsByClassName('letter'),
  dropLetters = document.getElementsByClassName('drop'),
  numberOfElements = myElements.length,
  dropNumber = dropLetters.length;

// step 2 - define tween objects for each element
for (var i = 0; i < numberOfElements; i++) {
  var tween = KUTE.fromTo(myElements[i], {
    draw: '0% 0%'
  }, {
    draw: '0% 100%'
  }, {
    duration: 1000
  });
  tweens.push(tween);
}

for (var i = 0; i < numberOfElements; i++) {
  var tween = KUTE.fromTo(myElements[i], {
    fillOpacity: 0
  }, {
    fillOpacity: 1
  }, {
    duration: 2000
  });
  tweens2.push(tween);
}

for (var i = 0; i < dropNumber; i++) {
  var tween = KUTE.fromTo(dropLetters[i], {
    opacity: 1
  }, {
    opacity: 0
  }, {
    duration: 1000
  });
  tweens3.push(tween);
}

// step 3 - calculate the right time to start
// first we need the exact current time
var now = window.performance.now(); // this returns the exact current time in numeric format

// also we estimate/calculate an adjustment lag 
// depending on the number of the elements AND hardware capability
// maybe (numberOfElements / 16) would be an accurate value for PCs
var lag = 100; // number of miliseconds for the script to built tween objects for all elements

// step4 - we just start the animation for all elements at once
for (var i = 0; i < numberOfElements; i++) {
  tweens[i].start(now + lag+5000);
}

for (var i = 0; i < numberOfElements; i++) {
  tweens2[i].start(now + lag + 6000);
}

for (var i = 0; i < dropNumber; i++) {
  tweens3[i].start(now + lag + 7000);
}

KUTE.fromTo('#N', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: 50,
  fill: "aqua",
  stroke: "aqua"
}).start(9000);
KUTE.fromTo('#P', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: -49,
  fill: "red",
  stroke: "red"
}).start(9000);

N.animate({
  opacity: 0.5
}, 10000)

P.animate({
  opacity: 0.5
}, 10000)

// setTimeout(function(){ 
//   KUTE.fromTo('#N',{translate:0},{translate: 100}).start(), 4000 });

// setTimeout(function(){ allLetters.animate({fill: "black"}, 2000); }, 1000);

// setTimeout(function(){ firstRemainder.animate({fill: "white", stroke: "white"}, 2000); }, 2000);

// setTimeout(function(){ lastRemainder.animate({fill: "white", stroke: "white"}, 2000); }, 2000);