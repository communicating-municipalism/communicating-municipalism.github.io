// ABOUT
const about = document.querySelector('.about');
const marqueeTxt = document.querySelector('.marquee-txt');
const marqueeTxtAlt = document.querySelector('.marquee-txt-alt');
const body = document.querySelector('body');

function showAbout() {
    about.classList.add('open');
    body.style.overflow = "hidden";
    marqueeTxt.style.display = "none";
    marqueeTxtAlt.style.display = "block";
  }

function hideAbout() {
    about.classList.remove('open');
    marqueeTxt.style.display = "block";
    marqueeTxtAlt.style.display = "none";
    body.style.overflow = "scroll";
  }


// HOVER

const personOne = document.querySelector('.person1');
const personOnetxt = document.querySelector('.person1 .text');
const personOneell = document.querySelector('.person1 .ellipse');

const personTwo = document.querySelector('.person2');
const personTwotxt = document.querySelector('.person2 .text');
const personTwoell = document.querySelector('.person2 rect ');

const personThree = document.querySelector('.person3');
const personThreetxt = document.querySelector('.person3 .text');
const personThreeell = document.querySelector('.person3 .ellipse');

const personFour = document.querySelector('.person4');
const personFourtxt = document.querySelector('.person4 .text');
const personFourell = document.querySelector('.person4 .ellipse');

const personFive = document.querySelector('.person5');
const personFivetxt = document.querySelector('.person5 .text');
const personFiveell = document.querySelector('.person5 .ellipse');

const personSix = document.querySelector('.person6');
const personSixtxt = document.querySelector('.person6 .text');
const personSixell = document.querySelector('.person6 .ellipse');

const personSeven = document.querySelector('.person7');
const personSeventxt = document.querySelector('.person7 .text');
const personSevenell = document.querySelector('.person7 .ellipse');

const personEight = document.querySelector('.person8');
const personEighttxt = document.querySelector('.person8 .text');
const personEightell = document.querySelector('.person8 .ellipse');

const personNine = document.querySelector('.person9');
const personNinetxt = document.querySelector('.person9 .text');
const personNineell = document.querySelector('.person9 .ellipse');

const personTen = document.querySelector('.person10');
const personTentxt = document.querySelector('.person10 .text');
const personTenell = document.querySelector('.person10 .ellipse');
const ellOne = document.querySelector('.ellipse1');
const ellTwo = document.querySelector('.ellipse2');
const ellThree = document.querySelector('.ellipse3');

const personEleven = document.querySelector('.person11');
const personEleventxt = document.querySelector('.person11 .text');
const personElevenell = document.querySelector('.person11 .ellipse');

const personTwelve = document.querySelector('.person12');
const personTwelvetxt = document.querySelector('.person12 .text');
const personTwelveell = document.querySelector('.person12 .ellipse');



// 1
personOne.addEventListener("mouseover", function () {
  personOnetxt.style.opacity = "1";
  personOneell.style.opacity = "1";
});

// 2
personTwo.addEventListener("mouseover", function () {
  personTwotxt.style.opacity = "1";
  personTwoell.style.opacity = "1";
});

// 3
personThree.addEventListener("mouseover", function () {
  personThreetxt.style.opacity = "1";
  personThreeell.style.opacity = "1";
});

// 4
personFour.addEventListener("mouseover", function () {
  personFourtxt.style.opacity = "1";
  personFourell.style.opacity = "1";
});

// 5
personFive.addEventListener("mouseover", function () {
  personFivetxt.style.opacity = "1";
  personFiveell.style.opacity = "1";
});

// 6
personSix.addEventListener("mouseover", function () {
  personSixtxt.style.opacity = "1";
  personSixell.style.opacity = "1";
});

// 7
personSeven.addEventListener("mouseover", function () {
  personSeventxt.style.opacity = "1";
  personSevenell.style.opacity = "1";
});

// 8
personEight.addEventListener("mouseover", function () {
  personEighttxt.style.opacity = "1";
  personEightell.style.opacity = "1";
});

// 9
personNine.addEventListener("mouseover", function () {
  personNinetxt.style.opacity = "1";
  personNineell.style.opacity = "1";
});

// 10
personTen.addEventListener("mouseover", function () {
  personTentxt.style.opacity = "1";
  personTenell.style.opacity = "1";
  ellOne.style.opacity = "1";
  ellTwo.style.opacity = "1";
  ellThree.style.opacity = "1";
});

// 11
personEleven.addEventListener("mouseover", function () {
  personEleventxt.style.opacity = "1";
  personElevenell.style.opacity = "1";
});

// 12
personTwelve.addEventListener("mouseover", function () {
  personTwelvetxt.style.opacity = "1";
  personTwelveell.style.opacity = "1";
});


// CLICK
const infoTwelve = document.querySelector('.infoTwelve');
const blockerTwelve = document.querySelector('.blocker12');

const infoEleven = document.querySelector('.infoEleven');
const blockerEleven = document.querySelector('.blocker11');

const infoTen = document.querySelector('.infoTen');
const blockerTen = document.querySelector('.blocker10');

const infoNine = document.querySelector('.infoNine');
const blockerNine = document.querySelector('.blocker9');

const infoEight = document.querySelector('.infoEight');
const blockerEight = document.querySelector('.blocker8');

const infoSeven = document.querySelector('.infoSeven');
const blockerSeven = document.querySelector('.blocker7');

const infoSix = document.querySelector('.infoSix');
const blockerSix = document.querySelector('.blocker6');

const infoFive = document.querySelector('.infoFive');
const blockerFive = document.querySelector('.blocker5');

const infoFour = document.querySelector('.infoFour');
const blockerFour = document.querySelector('.blocker4');

const infoThree = document.querySelector('.infoThree');
const blockerThree = document.querySelector('.blocker3');

const infoTwo = document.querySelector('.infoTwo');
const blockerTwo = document.querySelector('.blocker2');

const infoOne = document.querySelector('.infoOne');
const blockerOne = document.querySelector('.blocker1');

const speaker = document.querySelector('.speaker');
const infoBubble = document.querySelector('.infoBubble');
const blockerBubble = document.querySelector('.blockerBubble');


// 12
personTwelve.addEventListener("click", function () {
  infoTwelve.style.display = "block";
  body.style.overflow = "hidden";
  blockerTwelve.style. display = "block";
});

function hideTwelve() {
  infoTwelve.style.display = "none";
  blockerTwelve.style. display = "none";
  body.style.overflow = "scroll";
}

// 11
personEleven.addEventListener("click", function () {
  infoEleven.style.display = "block";
  body.style.overflow = "hidden";
  blockerEleven.style. display = "block";
});

function hideEleven() {
  infoEleven.style.display = "none";
  blockerEleven.style. display = "none";
  body.style.overflow = "scroll";
}

// 10
personTen.addEventListener("click", function () {
  infoTen.style.display = "block";
  body.style.overflow = "hidden";
  blockerTen.style. display = "block";
});

function hideTen() {
  infoTen.style.display = "none";
  blockerTen.style. display = "none";
  body.style.overflow = "scroll";
}

// 9
personNine.addEventListener("click", function () {
  infoNine.style.display = "block";
  body.style.overflow = "hidden";
  blockerNine.style. display = "block";
});

function hideNine() {
  infoNine.style.display = "none";
  blockerNine.style. display = "none";
  body.style.overflow = "scroll";
}

// 8
personEight.addEventListener("click", function () {
  infoEight.style.display = "block";
  body.style.overflow = "hidden";
  blockerEight.style. display = "block";
});

function hideEight() {
  infoEight.style.display = "none";
  blockerEight.style. display = "none";
  body.style.overflow = "scroll";
}

// 7
personSeven.addEventListener("click", function () {
  infoSeven.style.display = "block";
  body.style.overflow = "hidden";
  blockerSeven.style.display = "block";
});

function hideSeven() {
  infoSeven.style.display = "none";
  blockerSeven.style.display = "none";
  body.style.overflow = "scroll";
}

// 6
personSix.addEventListener("click", function () {
  infoSix.style.display = "block";
  body.style.overflow = "hidden";
  blockerSix.style.display = "block";
});

function hideSix() {
  infoSix.style.display = "none";
  blockerSix.style.display = "none";
  body.style.overflow = "scroll";
}

// 5
personFive.addEventListener("click", function () {
  infoFive.style.display = "block";
  body.style.overflow = "hidden";
  blockerFive.style.display = "block";
});

function hideFive() {
  infoFive.style.display = "none";
  blockerFive.style.display = "none";
  body.style.overflow = "scroll";
}


// 4
personFour.addEventListener("click", function () {
  infoFour.style.display = "block";
  body.style.overflow = "hidden";
  blockerFour.style.display = "block";
});

function hideFour() {
  infoFour.style.display = "none";
  blockerFour.style.display = "none";
  body.style.overflow = "scroll";
}

// 3
personThree.addEventListener("click", function () {
  infoThree.style.display = "block";
  body.style.overflow = "hidden";
  blockerThree.style.display = "block";
});

function hideThree() {
  infoThree.style.display = "none";
  blockerThree.style.display = "none";
  body.style.overflow = "scroll";
}

// 2
personTwo.addEventListener("click", function () {
  infoTwo.style.display = "block";
  body.style.overflow = "hidden";
  blockerTwo.style.display = "block";
});

function hideTwo() {
  infoTwo.style.display = "none";
  blockerTwo.style. display = "none";
  body.style.overflow = "scroll";
}

// 1
personOne.addEventListener("click", function () {
  infoOne.style.display = "block";
  body.style.overflow = "hidden";
  blockerOne.style.display = "block";
});

function hideOne() {
  infoOne.style.display = "none";
  blockerOne.style.display = "none";
  body.style.overflow = "scroll";
}

// Speaker
speaker.addEventListener("click", function () {
  infoBubble.style.display = "block";
  body.style.overflow = "hidden";
  blockerBubble.style.display = "block";
});

function hideBubble() {
  infoBubble.style.display = "none";
  blockerBubble.style.display = "none";
  body.style.overflow = "scroll";
}
