
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("carousel-item");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}




var sliderMain = document.getElementById('mainoffer-inner-card');
var item = sliderMain.getElementsByClassName('innercard');

var sliderMain2 = document.getElementById('mainoffer-inner-card2');
var item2 = sliderMain2.getElementsByClassName('innercard2');


var sliderMain3 = document.getElementById('mainoffer-inner-card3');
var item3 = sliderMain3.getElementsByClassName('innercard2');

var sliderMain4 = document.getElementById('mainoffer-inner-card4');
var item4 = sliderMain4.getElementsByClassName('innercard2');


function next() {
  sliderMain.append(item[0]);

}

function pre() {
  sliderMain.prepend(item[item.length - 1]);
}


function next2() {
  sliderMain2.append(item2[0]);

}

function pre2() {
  sliderMain2.prepend(item2[item2.length - 1]);
}


function next3() {
  sliderMain3.append(item3[0]);
}

function pre3() {
  sliderMain3.prepend(item3[item3.length - 1]);
}

function next4() {
  sliderMain4.append(item4[0]);
}

function pre4() {
  sliderMain4.prepend(item4[item4.length - 1]);
}

let menuContainer = document.getElementById('fashion-drpdwn');
let rightdd = document.getElementsByClassName('right-drp-down');
let leftMenu = document.getElementsByClassName('left');




// --------------      -----------------

// Getting the dropdown element
var dropdown = document.querySelector(".fashion-drpdwn");

// Getting the left and right side elements
var leftSide = dropdown.querySelector(".left-drp-down");
var rightSide = dropdown.querySelector(".right");

// Getting the content elements
var contents = rightSide.querySelectorAll(".right-drp-down");

// Adding event listener to the left side element
leftSide.addEventListener("mouseover", function () {

  // Showing the right side element

  rightSide.classList.add("show");
});

// Adding event listener to each left side link
leftSide.querySelectorAll("a").forEach(function (link) {
  // Getting the content element corresponding to the link
  var contentId = link.getAttribute("data-content-id");
  var content = document.querySelector("#" + contentId);

  // Adding event listener to the link
  link.addEventListener("mouseover", function () {
    // Hiding all content elements
    contents.forEach(function (content) {
      content.style.display = "none";
    });

    // Showing the content element corresponding to the link
    content.style.display = "block";
  });
});

// Adding event listener to the right side element
rightSide.addEventListener("mouseleave", function () {
  // Hiding the right side element
  rightSide.classList.remove("show");
});