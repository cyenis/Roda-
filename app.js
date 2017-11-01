'use strict';

// function App(container), buildSplash(), buildModes(), buildRoulette(), buildResult()

function App(main) {
  var self = this;

  self.modes = [{
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
  }];

  self.main = main;
}

//Start Screen----------------------------------------->


App.prototype.buildSplash = function() {
  var self = this;

  var divAround = document.createElement('div');
  divAround.setAttribute('id', 'div-around');
  self.main.appendChild(divAround);

  // Name of the Game/Branding:
  // var text = document.createElement('h1');
  // text.innerHTML = 'Roda!'.toUpperCase();
  // text.setAttribute('class', 'padding-start-screen');
  // divAround.appendChild(text);

  var el = document.createElement('logo');
  el.innerHTML = "<img src=\"./images/roda-logo.png\" width=\"250px\" height=\"250px\">";
  el.setAttribute('class', 'logo');
  divAround.appendChild(el);

  // App.prototype.description = function() {
  //   console.log('Life is the sum of random facts!');
  // };

  // Roll-Button:
  var startButton = document.createElement('button');
  startButton.innerHTML = "Let's roll!".toUpperCase();
  startButton.setAttribute('class', 'button');
  startButton.setAttribute('id', 'attention-btn');
  divAround.appendChild(startButton);

  startButton.addEventListener('click', function() {
    divAround.remove();
    self.buildModes();
  });

};

//MODES------------------------------------------------>


App.prototype.buildModes = function() {
  var self = this;
  var divAround = document.createElement('div');
  divAround.setAttribute('id', 'div-around');
  self.main.appendChild(divAround);

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
      divAround.remove();
      self.buildRoulette(event.currentTarget.getAttribute('data-index'));
    });

    divAround.appendChild(mode);
  }
};


//ROULETTE---------------------------------------------------->
App.prototype.buildRoulette = function(modeIndex) {
  console.log(modeIndex);

  var self = this;
  var divAround = document.createElement('div');
  divAround.setAttribute('id', 'div-around');
  self.main.appendChild(divAround);

  var text = document.createElement('h2');
  text.innerText = self.modes[modeIndex].label;
  divAround.appendChild(text);


  var icon = document.createElement('image');
  icon.innerHTML = ("<img src=" + '"' + self.modes[modeIndex].imgUrl + '"' + "width=300px" +
    "height=300px" +
    '>');
  icon.setAttribute('class', 'icon');
  divAround.appendChild(icon);

  var wheel = document.createElement('wheel');
  wheel.innerHTML = ("<img src=./images/magic-wheel.png" + " width=300px " +
    " height=300px " +
    ' >');
  wheel.setAttribute('class', 'roulette-image ');
  wheel.setAttribute('id', 'wheel');
  divAround.appendChild(wheel);

  var pointer = document.createElement('pointer');
  pointer.innerHTML = ("<img src= ./images/pointer.png + " + "width=300px" +
    "height=300px" +
    '>');
  pointer.setAttribute('class', 'icon');
  divAround.appendChild(pointer);

  var answers = document.createElement('answers');
  answers.innerText = '';
  answers.setAttribute('class', 'answers');
  divAround.appendChild(answers);

  divAround.addEventListener('click', function() {
    self.buildResult();
    console.log('clicked');
    // wheel.className = "roulette";


    function flash(modeIndex) {
      function random(array) {
        var random = Math.floor(Math.random() * array.length);
        return array[random];
      }
      wheel.className = "roulette";
      var nIntervId = setInterval(function() {
          var flush = random(this.destinations);
          answers.innerText = flush.name;
          icon.innerHTML = ("<img src=" + '"' + flush.image + '"' + "width=300px" +
            "height=300px" +
            '>');
        },
        100);
      window.setTimeout(function() {
        clearInterval(nIntervId);
        //console.log("the result is: " + random(array).name);
        var answer = this.random(this.destinations);
        answers.innerText = answer.name;
        icon.innerHTML = ("<img src=" + '"' + answer.image + '"' + "width=300px" +
          "height=300px" +
          '>');
        wheel.className = "roulette-image";
      }, 3000);
    }
    flash(modeIndex);








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
