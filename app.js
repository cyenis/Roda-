'use strict';

// function App(container), buildSplash(), buildModes(), buildRoulette(), buildResult()

function App(main) {
  var self = this;

  self.modes = [{
    label: 'Travel',
    className: 'travel',
    imgUrl: 'http://'
  }, {
    label: 'Food',
    className: 'food',
    imgUrl: 'http://'
  }];

  self.main = main;
}

//function buildSplash() {}


App.prototype.buildSplash = function() {
  var self = this;

  var divAround = document.createElement('div');
  divAround.setAttribute('id', 'div-around');
  self.main.appendChild(divAround);

  // Name of the Game:
  var text = document.createElement('h1');
  text.innerHTML = 'Roda!'.toUpperCase();
  text.setAttribute('class', 'padding-start-screen');
  divAround.appendChild(text);


  App.prototype.description = function() {
    console.log('Life is the sum of random facts!');
  };

  // Display the Start-Button:
  var startButton = document.createElement('button');
  startButton.innerHTML = "Let's roll!".toUpperCase();
  startButton.setAttribute('class', 'button');
  startButton.setAttribute('id', 'attention-btn');
  divAround.appendChild(startButton);

  // Display the Rules-Button:
  // var rulesButton = document.createElement('button');
  // rulesButton.innerHTML = "Rules".toUpperCase();
  // rulesButton.setAttribute('class', 'button');
  // rulesButton.setAttribute('id', 'ghost-btn');
  // divAround.appendChild(rulesButton);
  //Add Click-Events:
  startButton.addEventListener('click', function() {
    divAround.remove();
    self.buildModes();
  });
  //
  // resetButton.addEventListener('click', function() {
  //   self.rules();
  // });

};




App.prototype.buildModes = function() {
  var self = this;

  var divAround = document.createElement('div');
  divAround.setAttribute('id', 'div-around');
  self.main.appendChild(divAround);

  for (var ix = 0; ix < self.modes.length; ix++) {
    var mode = document.createElement('div');
    mode.classList.add(self.modes[ix].className);

    var text = document.createElement('h2');
    text.innerText = self.modes[ix].label;

    //mode.appendChild(img);
    mode.appendChild(text);

    mode.setAttribute('data-index', ix);
    mode.addEventListener('click', function(event) {
      divAround.remove();
      self.buildRoulette(event.currentTarget.getAttribute('data-index'));
    });

    divAround.appendChild(mode);
  }
};

App.prototype.buildRoulette = function(modeIndex) {
  console.log(modeIndex);

};

App.prototype.buildResult = function() {

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
