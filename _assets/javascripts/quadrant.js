// --------------
// Set attr on all letters for draw animation
// --------------

var allLetters = Snap.selectAll(".letter")

function setAttr(letter) {

  var length = letter.getTotalLength();

  letter.attr({
    'stroke-dasharray': length,
    'stroke-dashoffset': length,
    'stroke': "#808080",
    'stroke-width': 0.5,
    'fill-opacity': 0,
  })

}

function setAllLetters(elem, idx, arra) {
  setAttr(elem);
}

allLetters.forEach(setAllLetters);

// --------------
// Set KUTE variables
// --------------

// step 1 - create an empty array and grab the elements to animate
var ctDrawTweens = [],
  ctFadeInAllTweens = [],
  ctFadeOutDropTweens = [],
  ctFadeInDropTweens = [],
  quadDrawTweens = [],
  quadFadeInTweens = [],
  centerLetters = document.getElementsByClassName('ct-letter'),
  dropLetters = document.getElementsByClassName('drop'),
  quadLetters = document.getElementsByClassName('quad-letter'),
  numberOfCenterLetters = centerLetters.length,
  numberOfDropLetters = dropLetters.length,
  numberOfQuadLetters = quadLetters.length;

// Draw center letters
for (var i = 0; i < numberOfCenterLetters; i++) {
  var tween = KUTE.fromTo(centerLetters[i], {
    draw: '0% 0%'
  }, {
    draw: '0% 100%'
  }, {
    duration: 1000
  });
  ctDrawTweens.push(tween);
}

// Fade in center letters
for (var i = 0; i < numberOfCenterLetters; i++) {
  var tween = KUTE.fromTo(centerLetters[i], {
    fillOpacity: 0
  }, {
    fillOpacity: 1
  }, {
    duration: 2000
  });
  ctFadeInAllTweens.push(tween);
}

// Fade out "oah resctott"
for (var i = 0; i < numberOfDropLetters; i++) {
  var tween = KUTE.fromTo(dropLetters[i], {
    opacity: 1
  }, {
    opacity: 0
  }, {
    duration: 100
  });
  ctFadeOutDropTweens.push(tween);
}

// Fade in "oah resctott"
for (var i = 0; i < numberOfDropLetters; i++) {
  var tween = KUTE.fromTo(dropLetters[i], {
    opacity: 0
  }, {
    opacity: 1
  }, {
    duration: 100
  });
  ctFadeInDropTweens.push(tween);
}

// Fade in quad letters
for (var i = 0; i < numberOfQuadLetters; i++) {
  var tween = KUTE.fromTo(quadLetters[i], {
    draw: '0% 0%'
  }, {
    draw: '0% 100%'
  }, {
    duration: 1000
  });
  quadDrawTweens.push(tween);
}

for (var i = 0; i < numberOfQuadLetters; i++) {
  var tween = KUTE.fromTo(quadLetters[i], {
    fillOpacity: 0
  }, {
    fillOpacity: 1
  }, {
    duration: 2000
  });
  quadFadeInTweens.push(tween);
}

var now = window.performance.now();
var lag = 100;

// step4 - we just start the animation for all elements at once
for (var i = 0; i < numberOfCenterLetters; i++) {
  ctDrawTweens[i].start(now + lag);
}

for (var i = 0; i < numberOfCenterLetters; i++) {
  ctFadeInAllTweens[i].start(now + lag + 2000);
}

for (var i = 0; i < numberOfDropLetters; i++) {
  ctFadeOutDropTweens[i].start(now + lag + 3000);
}

for (var i = 0; i < numberOfQuadLetters; i++) {
  quadDrawTweens[i].start(now + lag + 4000);
}

for (var i = 0; i < numberOfQuadLetters; i++) {
  quadFadeInTweens[i].start(now + lag + 5000);
}

KUTE.fromTo('#N', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: 248,
  fill: "#3996DA",
  stroke: "#3996DA"
}).start(4000);

KUTE.fromTo('#P', {
  translate: 0,
  fill: "black",
  stroke: "black"
}, {
  translate: 38,
  fill: "#E05451",
  stroke: "#E05451"
}).start(4000);

// --------------
// * Have to use Snap svg for opacity animation because of non support in KUTE
// --------------

var s = Snap("#np");

var N = s.select("#N");
var P = s.select("#P");

var bbox = N.getBBox();
var pBbox = P.getBBox();

function npAnimation() {

  N.animate({
    opacity: 0.5,
    // transform: "s3,3," + bbox.cx + "," + bbox.cy,
  }, 1000);

  P.animate({
    opacity: 0.5,
    // transform: "s3,3," + pBbox.cx + "," + pBbox.cy,
  }, 1000);

}

setTimeout(function() {
  npAnimation()
}, 3000);

// --------------
// Center animation
// --------------

function fadeInLetters() {
  for (var i = 0; i < numberOfDropLetters; i++) {
    ctFadeInDropTweens[i].start();
  }
  KUTE.fromTo('#N', {
    translate: 248,
    fill: "#3996DA",
    stroke: "#3996DA"
  }, {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    duration: 200
  }).start();

  KUTE.fromTo('#P', {
    translate: 38,
    fill: "#E05451",
    stroke: "#E05451"
  }, {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    duration: 200
  }).start();

}

function fadeOutLetters() {
  for (var i = 0; i < numberOfDropLetters; i++) {
    ctFadeOutDropTweens[i].start();
  }
  KUTE.fromTo('#N', {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    translate: 248,
    fill: "#3996DA",
    stroke: "#3996DA"
  }, {
    duration: 200
  }).start();

  KUTE.fromTo('#P', {
    translate: 0,
    fill: "black",
    stroke: "black"
  }, {
    translate: 38,
    fill: "#E05451",
    stroke: "#E05451"
  }, {
    duration: 200
  }).start();
}

document.getElementById("np").addEventListener("mouseenter", fadeInLetters);
document.getElementById("np").addEventListener("mouseleave", fadeOutLetters);

// --------------
// Quadrant animation
// --------------

function zoomQuadrant() {

 
  document.getElementById("menu-icon").classList.toggle('open');
  document.getElementById("menu-icon-wrapper").classList.toggle('open');

  var tl = document.getElementById("tl")
  var tr = document.getElementById("tr")
  var bl = document.getElementById("bl")
  var br = document.getElementById("br")

  tr.style.height = "0vw";
  tr.style.width = "0vw";
  tr.style.border = "none";

  tl.style.height = "0vw";
  tl.style.width = "0vw";
  tl.style.border = "none";

  bl.style.width = "0vw";
  bl.style.height = "0vw";
  bl.style.border = "none";

  br.style.width = "0vw";
  br.style.height = "0vw";
  br.style.border = "none";

  document.getElementById("ct").style.opacity = "0";

  this.style.height = "100vh";
  this.style.width = "100vw";
  this.style["background-color"] = "white";
  this.style["pointer-events"] = "none";
  this.style.border = "none";
  this.childNodes[1].style.height = "40vh";
  this.childNodes[1].style.fill = "rgba(57, 150, 218, 0.5)";
  this.childNodes[1].style.stroke = "rgba(57, 150, 218, 0.5)";
  this.style["justify-content"] = "flex-start"
  this.childNodes[3].classList.add('open') //about-text-wrapper
  this.childNodes[3].childNodes[1].classList.add('open')//
};

function zoomQuadrantBack() {
  document.getElementById("tl").style.height = "";
  document.getElementById("tl").style.width = "";
  document.getElementById("tl").style.border = "";
  document.getElementById("tl").style.opacity = "";
  document.getElementById("tl").childNodes[1].style.height = "";
  document.getElementById("tl").style["pointer-events"] = "auto"
  document.getElementById("tl").style["background-color"] = "";
  document.getElementById("tl").childNodes[1].style.fill = "";
  document.getElementById("tl").childNodes[1].style.stroke = "";

  document.getElementById("tr").style.height = "";
  document.getElementById("tr").style.width = "";
  document.getElementById("tr").style.border = "";
  document.getElementById("tr").style.opacity = "";
  document.getElementById("tr").childNodes[1].style.height = "";
  document.getElementById("tr").style["pointer-events"] = "auto";
  document.getElementById("tr").style["background-color"] = "";
  document.getElementById("tr").childNodes[1].style.fill = "";
  document.getElementById("tr").childNodes[1].style.stroke = "";
  
  document.getElementById("br").style.height = "";
  document.getElementById("br").style.width = "";
  document.getElementById("br").style.border = "";
  document.getElementById("br").style.opacity = "";
  document.getElementById("br").childNodes[1].style.height = "";
  document.getElementById("br").style["pointer-events"] = "auto";
  document.getElementById("br").style["background-color"] = "";
  document.getElementById("br").childNodes[1].style.fill = "";
  document.getElementById("br").childNodes[1].style.stroke = "";
  
  document.getElementById("bl").style.height = "";
  document.getElementById("bl").style.width = "";
  document.getElementById("bl").style.border = "";
  document.getElementById("bl").style.opacity = "";
  document.getElementById("bl").childNodes[1].style.height = "";
  document.getElementById("bl").style["pointer-events"] = "auto";
  document.getElementById("bl").style["background-color"] = "";
  document.getElementById("bl").childNodes[1].style.fill = "";
  document.getElementById("bl").childNodes[1].style.stroke = "";
  
  setTimeout(function() {
    document.getElementById("ct").style.opacity = ""
  }, 1500);

  document.getElementById("about-text-wrapper").classList.remove('open');
  document.getElementById("about-text").classList.remove('open');
  document.getElementById("contact-text-wrapper").classList.remove('open');
  document.getElementById("contact-text").classList.remove('open');
  document.getElementById("blog-text-wrapper").classList.remove('open');
  document.getElementById("blog-text").classList.remove('open');
  document.getElementById("portfolio-text-wrapper").classList.remove('open');
  document.getElementById("portfolio-text").classList.remove('open');
  document.getElementById("menu-icon").classList.toggle('open');
  document.getElementById("menu-icon-wrapper").classList.toggle('open');

};

// add event listeners to quadrant

document.getElementById("tl").addEventListener("click", zoomQuadrant, false);

document.getElementById("tr").addEventListener("click", zoomQuadrant, false);

document.getElementById("bl").addEventListener("click", zoomQuadrant, false);

document.getElementById("br").addEventListener("click", zoomQuadrant, false);

document.getElementById("menu-icon").addEventListener("click", zoomQuadrantBack, false);

// Cursor no events for center and no cursor for quadrants 4 secs
setTimeout(function() {
  document.getElementById("ct").style["pointer-events"] = "initial";
  document.getElementById("tl").style["pointer-events"] = "auto";
  document.getElementById("tr").style["pointer-events"] = "auto";
  document.getElementById("bl").style["pointer-events"] = "auto";
  document.getElementById("br").style["pointer-events"] = "auto";
}, 4000)