const TWIX = 0, EGG = 1, TWIZZLER = 2, AIRHEAD = 3, RINGPOP = 4
function Initialize() {
/* Lesson 1
  numberOutput = document.getElementById("numoutput");
  number = 0;
  
   Lesson 2
  outTwix = document.getElementById("numtwix");
  outEggs = document.getElementById("numeggs");
  outTwizz = document.getElementById("numtwizzlers");
  outAirH = document.getElementById("numairheads");
  outRingP = document.getElementById("numringpops");
  logOutput = document.getElementById("candylog");

  numTwix = parseInt(Math.random() * 11);
  numEggs = parseInt(Math.random() * 11);
  numTwizz = parseInt(Math.random() * 11);
  numAirH = parseInt(Math.random() * 11);
  numRingP = parseInt(Math.random() * 11);

  candyLog = "";

  display();
    Lesson 3
  inputCon = document.getElementById("inputform");
  greetOut = document.getElementById("greeting");

  firstName = "";
  lastName = "";
  eatsPizza = false;
  */
  diceTable = document.getElementById("dicetable");
  rollDice();
}

function modifyNumber() {
  number += modifier;
  display();
}

function display() {
  /* Lesson 1
  numberOutput.innerHTML = number;
     Lesson 2
  outTwix.innerHTML = numTwix;
  outEggs.innerHTML = numEggs;
  outTwizz.innerHTML = numTwizz;
  outAirH.innerHTML = numAirH;
  outRingP.innerHTML = numRingP;
  logOutput.innerHTML = candyLog;

    Lesson 3
  greetingOutput.innerHTML = "Hello " + firstName + " " + lastName + " " + "! Welcome to our page!<br />";

  if (!eatsPizza) {
    greetingOutput.innerHTML += "It looks like you're not a fan of pizza.";
  }

  else {
    greetingOutput.innerHTML += "It looks like you're a fan of pizza.";
  }
  */
  
}

function getRandomInteger(lower, upper) {
  var multiplier = upper - (lower - 1);
  var rnd = parseInt(Math.random() * multiplier) + lower;

  return rnd;
}

function giveCandy() {

  if (numTwix + numEggs + numTwizz + numAirH + numRingP == 0) {
    candyLog = "There is no more candy. <br />" + candyLog;
  }

  var badSelec = true;
  while (badSelec) {
  var selectedCandy = parseInt(Math.random() * 5);
  if (selectedCandy == TWIX) {
    if (numTwix > 0) {
    numTwix--;
    candyLog = "You gave out a Twix.<br />" + candyLog;
    badSelec = false;
  } 
    else {
      candyLog = "There are no more Twixes. <br />" + candyLog
    }
  }
  else {
    if (selectedCandy == EGG) {
      numEggs--;
      candyLog = "You gave out a Scream Egg.<br />" + candyLog;
    }
    else {
      if (selectedCandy == TWIZZLER) {
        numTwizz--;
        candyLog = "You gave out a Twizzler.<br />" + candyLog;
      }

        
      else {
        if (selectedCandy == AIRHEAD) {
          numAirH--;
          candyLog = "You gave out an Airhead.<br />" + candyLog;
        }

          
        else {
          numRingP--;
          candyLog = "You gave out a Ring Pop.<br />" + candyLog;
        }
      }
    }
  }
  display();
  }
}

function recordData() {
  firstName = inputCon.fname.value;
  lastName = inputCon.lname.value;
  eatsPizza = inputCon.pizza.checked;

  inputCon.fname.value = "";
  inputCon.lname.value = "";

  display();
}

function rollDice() {
  var numRolls = getRandomInteger(25, 100);

  for (var i = 0; i < numRolls; i++) {
    var dieRoll = getRandomInteger(1,6);
    var newRow = diceTable.insertRow();
    var newCell = newRow.insertCell();
    newCell.innerHTML = "Roll " + (i + 1);

    newCell = newRow.insertCell();
    newCell.innerHTML = dieRoll; 
  }
}