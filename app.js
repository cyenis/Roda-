'use strict';

// function App(container), buildSplash(), buildModes(), buildRoulette(), buildResult()

function App(main) {
  // var self = this;

  this.modes = [{
      label: 'Where shall i travel to?',
      className: 'destinations',
      imgUrl: './images/travelicon.png'
    }, {
      label: 'What shall i eat?',
      className: 'foods',
      imgUrl: './images/foodicon.png'
    }, {
      label: 'Make your Own randomizer',
      className: 'custom',
      imgUrl: './images/customicon.png'
    }, {
      label: 'Prize',
      className: 'prize',
      imgUrl: './images/prizeicon.png'
    },
    {
      label: 'Dice',
      className: 'dice',
      imgUrl: './images/diceicon.png'
    }
  ];

  this.main = main;
}

//Start Screen----------------------------------------->


App.prototype.buildSplash = function() {
  var self = this;

  var divMid = document.createElement('div');
  divMid.setAttribute('id', 'div-mid');
  self.main.appendChild(divMid);

  // Name of the Game/Branding:
  // var text = document.createElement('h1');
  // text.innerHTML = 'Roda!'.toUpperCase();
  // text.setAttribute('class', 'padding-start-screen');
  // divMid.appendChild(text);

  // var el = document.createElement('logo');
  // el.innerHTML = "<img src=\"./images/roda-logo.png\" width=\"250px\" height=\"250px\">";
  // el.setAttribute('class', 'logo');
  // divMid.appendChild(el);

  // App.prototype.description = function() {
  //   console.log('Life is the sum of random facts!');
  // };

  // Roll-Button:
  var startButton = document.createElement('button');
  startButton.innerHTML = "Let's roll!".toUpperCase();
  startButton.setAttribute('class', 'button');
  startButton.setAttribute('id', 'attention-btn');
  divMid.appendChild(startButton);

  startButton.addEventListener('click', function() {
    divMid.remove();
    self.buildModes();
  });

};

//MODES------------------------------------------------>


App.prototype.buildModes = function() {
  var self = this;
  var divMid = document.createElement('div');
  divMid.setAttribute('id', 'div-mid');
  self.main.appendChild(divMid);

  for (var ix = 0; ix < self.modes.length; ix++) {
    var mode = document.createElement('div');
    mode.classList.add(self.modes[ix].className);

    //Mode icon
    var img = document.createElement('image');
    img.innerHTML = ("<img src=" + '"' + self.modes[ix].imgUrl + '"' + "width=250px" +
      "height=250px" +
      '>');
    img.setAttribute('class', 'mode-icons');
    mode.appendChild(img);

    //Mode description
    var text = document.createElement('h2');
    text.innerText = self.modes[ix].label;
    mode.appendChild(text);

    mode.setAttribute('data-index', ix);

    mode.addEventListener('click', function(event) {
      divMid.remove();
      self.buildRoulette(event.currentTarget.getAttribute('data-index'));
    });

    divMid.appendChild(mode);
  }
};


//ROULETTE---------------------------------------------------->

App.prototype.buildRoulette = function(modeIndex) {
  console.log(modeIndex);


  var self = this;
  //divHigh----------------->
  var divHigh = document.createElement('div');
  divHigh.setAttribute('id', 'div-high');
  self.main.appendChild(divHigh);

  //description
  var text = document.createElement('h2');
  text.innerText = self.modes[modeIndex].label;
  divHigh.appendChild(text);


  //divMid----------------->
  var divMid = document.createElement('div');
  divMid.setAttribute('id', 'div-mid');
  self.main.appendChild(divMid);


  //wheel
  var icon = document.createElement('image');
  icon.innerHTML = ("<img src=" + '"' + self.modes[modeIndex].imgUrl + '"' + "width=300px" +
    "height=300px" +
    '>');
  icon.setAttribute('class', 'icon');
  divMid.appendChild(icon);


  //WHEEL----->
  var wheel = document.createElement('wheel');
  wheel.innerHTML = ("<img src=./images/laroda.png" + " width=300px " +
    " height=300px " +
    ' >');
  wheel.setAttribute('class', 'roulette-image ');
  wheel.setAttribute('id', 'wheel');
  divMid.appendChild(wheel);

  //POINTER----->
  var pointer = document.createElement('pointer');
  pointer.innerHTML = ("<img src= ./images/pointer.png + " + "width=300px" +
    "height=300px" +
    '>');
  pointer.setAttribute('class', 'icon');
  divMid.appendChild(pointer);

  //ANSWERS--------->
  var answers = document.createElement('answers');
  answers.innerText = '';
  answers.setAttribute('class', 'answers');
  divMid.appendChild(answers);


  //divlow----------------->
  var divlow = document.createElement('div');
  divMid.setAttribute('id', 'div-low');
  divMid.appendChild(divlow);

  // backToModes button---------------------------->
  var backButton = document.createElement('button');
  backButton.innerHTML = "Back to Modes".toUpperCase();
  backButton.setAttribute('class', 'button');
  divlow.appendChild(backButton);

  backButton.addEventListener('click', function() {
    divHigh.remove();
    divMid.remove();
    divlow.remove();
    self.buildModes();
  });



  //CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK----->

  divMid.addEventListener('click', function() {
    self.buildResult();
    console.log('clicked');
    // wheel.className = "roulette";

    //ROLL TIME ------------>

    function flash() {
      function random(array) {
        var random = Math.floor(Math.random() * array.length);
        return array[random];
      }
      wheel.className = "roulette";
      var nIntervId = setInterval(function() {
          // var flush = random(self.modes[modeIndex].className);
          var flush = random(this.modes[modeIndex].className);
          answers.innerText = flush.name;
          icon.innerHTML = ("<img src=" + '"' + flush.image + '"' + "width=300px" +
            "height=300px" +
            '>');
        },
        100);
      window.setTimeout(function() {
        clearInterval(nIntervId);
        //console.log("the result is: " + random(array).name);
        // var answer = random(self.modes[modeIndex].className);
        var answer = random(this.destinations);

        answers.innerText = answer.name;
        icon.innerHTML = ("<img src=" + '"' + answer.image + '"' + "width=300px" +
          "height=300px" +
          '>');
        wheel.className = "roulette-image";
      }, 3000);
    }
    flash();


  });


};


// //RESULT----------------------------------------------------->
App.prototype.buildResult = function() {


  //   var self = this;
  //
  //   function flash() {
  //     var nIntervId = setInterval(function() {
  //         document.getElementById("input").innerHTML = random(array).name;
  //       },
  //       100);
  //     window.setTimeout(function() {
  //       clearInterval(nIntervId);
  //       //console.log("the result is: " + random(array).name);
  //       document.getElementById("input").innerHTML = random(array).name;
  //       document.getElementById("wheel").className = "roulette-image";
  //     }, 3000);
  //   }

};





/*
function Soldier(health, strength) {
  this.health = health;
  this.strength = strength;
}

Soldier.prototype.attack = function() {
  return this.strength;
};

Saxon.prototype = new Soldier();

Saxon.prototype.receiveDamage = function(damage) {
  this.health -= damage; //error
  if (this.health > 0) {
    return "A Saxon has received " + damage + " points of damage";
  } else {
    return  "A Saxon has died in combat";
    */
