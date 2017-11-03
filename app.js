'use strict';

// function App(container), buildSplash(), buildModes(), buildRoulette(), buildResult()

function App(main) {
  // var self = this;

  this.modes = [{
      label: 'Destination',
      className: 'destinations',
      imgUrl: './images/icons/travelicon.png'
    }, {
      label: 'Food',
      className: 'foods',
      imgUrl: './images/icons/foodicon.png'
    },
    {
      label: 'Dice',
      className: 'dice',
      imgUrl: './images/icons/diceicon.png'
    },
    {
      label: 'Euro',
      className: 'euro',
      imgUrl: './images/icons/euroicon.png'
    },
    {
      label: 'WebDev',
      className: 'webdev',
      imgUrl: './images/icons/webdevicon.png'
    },
    {
      label: 'Alcohol',
      className: 'alcohol',
      imgUrl: './images/icons/Alcoholicon.png'
    },
    // {
    //   label: 'Sweet',
    //   className: 'sweet',
    //   imgUrl: './images/icons/sweeticon.png'
    // },
    // {
    //   label: 'Music',
    //   className: 'music',
    //   imgUrl: './images/icons/musicicon.png'
    // },
    // {
    //   label: 'Podcast',
    //   className: 'podcast',
    //   imgUrl: './images/icons/podcasticon.png'
    // },
    // {
    //   label: 'Now Playing',
    //   className: 'moviesnow',
    //   imgUrl: './images/icons/movienowicon.png'
    // },
    // {
    //   label: 'Movie',
    //   className: 'moviehome',
    //   imgUrl: './images/icons/moviehomeicon.png'
    // },
    {
      label: 'Gift',
      className: 'gift',
      imgUrl: './images/icons/gifticon.png'
    }, {
      label: 'Game',
      className: 'games',
      imgUrl: './images/icons/gameicon.png'
      // },
      // {
      //   label: 'Choice',
      //   className: 'custom',
      //   imgUrl: './images/icons/customicon.png'
      // }, {
      //   label: 'Prize',
      //   className: 'prize',
      //   imgUrl: './images/icons/prizeicon.png'
    }
  ];

  this.main = main;
}

//Start Screen----------------------------------------->


App.prototype.buildSplash = function() {
  var self = this;

  var divHigh = document.createElement('div');
  divHigh.setAttribute('id', 'quote');
  self.main.appendChild(divHigh);

  //Name of the Game/Branding:
  var text = document.createElement('h2');
  text.innerHTML = 'Life is a sum of random facts!'.toUpperCase();
  text.setAttribute('class', 'quote2');
  divHigh.appendChild(text);

  var divMid = document.createElement('div');
  divMid.setAttribute('id', 'start-button');
  self.main.appendChild(divMid);

  // var el = document.createElement('logo');
  // el.innerHTML = "<img src=\"./images/roda-logo.png\" width=\"250px\" height=\"250px\">";
  // el.setAttribute('class', 'logo');
  // divMid.appendChild(el);

  // App.prototype.description = function() {
  //   console.log('Life is the sum of random facts!');
  // };

  // Start-Button:
  var startButton = document.createElement('button');
  startButton.innerHTML = "Let's roll!".toUpperCase();
  startButton.setAttribute("class",
    "btn btn-primary");
  startButton.setAttribute('id', 'start-button');
  divMid.appendChild(startButton);

  startButton.addEventListener('click', function() {
    divHigh.remove();
    divMid.remove();
    startButton.remove();
    self.buildModes();
  });

};

//MODES------------------------------------------------>


App.prototype.buildModes = function() {
  var self = this;

  var divHigh = document.createElement('div');
  divHigh.setAttribute('id', 'pick');
  self.main.appendChild(divHigh);

  //Name of the Game/Branding:
  var text = document.createElement('h2');
  text.innerHTML = 'Pick a random:'.toUpperCase();
  text.setAttribute('class', 'quote');
  divHigh.appendChild(text);

  var divContainer = document.createElement('div');
  divContainer.setAttribute('class', 'container-fluid');
  divContainer.setAttribute('id', 'modes');
  self.main.appendChild(divContainer);

  var divRow = document.createElement('div');
  divRow.setAttribute('class', 'row');
  // divRow.setAttribute('id', 'modes');
  divContainer.appendChild(divRow);

  // var divCol1 = document.createElement('div');
  // divCol1.setAttribute('class', '"col-sm-4"');
  // divCol1.setAttribute('id', 'modeC');
  // divRow.appendChild(divCol1);
  //
  // var divCol2 = document.createElement('div');
  // divCol2.setAttribute('class', '"col-sm-4"');
  // divCol2.setAttribute('id', 'modeC');
  // divRow.appendChild(divCol2);


  for (var ix = 0; ix < self.modes.length; ix++) {
    var mode = document.createElement('div');
    mode.classList.add(self.modes[ix].className);

    //Mode description
    var textL = document.createElement('h2');
    textL.innerText = self.modes[ix].label;
    mode.appendChild(textL);

    //Mode icon
    var img = document.createElement('image');
    img.innerHTML = ("<img src=" + '"' + self.modes[ix].imgUrl + '"' + "width=250px" +
      "height=250px" +
      '>');
    img.setAttribute('class', 'mode-icons');
    mode.appendChild(img);



    mode.setAttribute('data-index', ix);

    mode.addEventListener('click', function(event) {
      divRow.remove();
      divHigh.remove();
      divContainer.remove();
      self.buildRoulette(event.currentTarget.getAttribute('data-index'));
    });
    divRow.appendChild(mode);
  }

  // for (ix = 1; ix < self.modes.length; ix += 2) {
  //   var modeR = document.createElement('div');
  //   modeR.classList.add(self.modes[ix].className);
  //
  //   //Mode description
  //   var textR = document.createElement('h2');
  //   textR.innerText = self.modes[ix].label;
  //   modeR.appendChild(textR);
  //
  //   //Mode icon
  //   var imgR = document.createElement('image');
  //   imgR.innerHTML = ("<img src=" + '"' + self.modes[ix].imgUrl + '"' + "width=250px" +
  //     "height=250px" +
  //     '>');
  //   imgR.setAttribute('class', 'mode-icons');
  //   modeR.appendChild(imgR);
  //
  //
  //
  //   modeR.setAttribute('data-index', ix);
  //
  //   modeR.addEventListener('click', function(event) {
  //     divHigh.remove();
  //     divRow.remove();
  //     divContainer.remove();
  //     self.buildRoulette(event.currentTarget.getAttribute('data-index'));
  //   });
  //   divRow.appendChild(modeR);
  // }


};


//ROULETTE---------------------------------------------------->

App.prototype.buildRoulette = function(modeIndex) {

  this.arrayIndex = modeIndex;

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
  divMid.setAttribute('class', 'container-fluid');
  divMid.setAttribute('id', 'roulettePlaceholder');
  self.main.appendChild(divMid);


  var divGraph = document.createElement('div');
  divGraph.setAttribute('class', 'container-fluid');
  divGraph.setAttribute('id', 'rouletteGraph');
  divMid.appendChild(divGraph);

  //ICONS & PICTURES
  this.icon = document.createElement('image');
  this.icon.innerHTML = ("<img class='picturesRound' src=" + '"' + self.modes[modeIndex].imgUrl + '"' + '>');
  this.icon.setAttribute('class', 'icon');
  divGraph.appendChild(this.icon);


  //WHEEL----->
  this.wheel = document.createElement('wheel');
  this.wheel.innerHTML = ("<img class='wheel'src=./images/wheels/laroda.png" +
    ' >');
  this.wheel.setAttribute('class', 'wheelStatic ');
  divGraph.appendChild(this.wheel);

  //POINTER----->
  var pointer = document.createElement('pointer');
  pointer.innerHTML = ("<img class='wheel' src= ./images/wheels/pointer.png + " +
    '>');
  // pointer.setAttribute('class', 'icon');
  divGraph.appendChild(pointer);

  // ANSWERS--------->
  this.answers = document.createElement('answers');
  this.answers.innerText = '';
  this.answers.setAttribute('class', 'answers');
  divGraph.appendChild(this.answers);


  //divlow----------------->
  var divlow = document.createElement('div');
  divlow.setAttribute('class', 'div-low');
  self.main.appendChild(divlow);

  // //ANSWERS--------->
  // this.answers = document.createElement('answers');
  // this.answers.innerText = '';
  // this.answers.setAttribute('class', 'answers');
  // divlow.appendChild(this.answers);

  // //Actions & Urls--------->
  this.actions = document.createElement('actions');
  this.actions.innerText = '';
  this.actions.setAttribute('class', 'actions');
  divlow.appendChild(this.actions);

  this.links = document.createElement('links');
  this.links.innerText = '';
  this.links.setAttribute('class', 'links');
  divlow.appendChild(this.links);

  // backToModes button---------------------------->
  var backButton = document.createElement('button');
  backButton.innerHTML = "Back to Modes".toUpperCase();
  backButton.setAttribute('class', "btn btn-secondary");
  backButton.setAttribute('id', 'back-button');
  divlow.appendChild(backButton);

  backButton.addEventListener('click', function() {
    divHigh.remove();
    divMid.remove();
    divlow.remove();
    divGraph.remove();
    self.buildModes();
  });

  //CLICK CLICK CLICK CLICK CLICK CLICK CLICK CLICK----->

  divGraph.addEventListener('click', function() {
    self.buildResult();
    console.log('clicked');
    // wheel.className = "wheelSpin";

    //ROLL TIME ------------>
  });

  App.prototype.randomizer = function(array) {
    var random = Math.floor(Math.random() * array.length);
    return array[random];
  };




  // //RESULT----------------------------------------------------->
  App.prototype.buildResult = function() {
    var self = this;
    var flush;
    this.wheel.className = "wheelSpin";
    var nIntervId = setInterval(function() {
        // var flush = random(self.modes[modeIndex].className);
        this.audioRoll.play();
        var selections = this.items[self.modes[self.arrayIndex].className];
        console.log(selections);
        flush = self.randomizer(selections);
        console.log(flush);
        self.answers.innerText = flush.name;
        self.icon.innerHTML = ("<img class='picturesRound' src=" + '"' + flush.image + '"' +
          '>');
      },
      100);
    window.setTimeout(function() {
      clearInterval(nIntervId);
      //console.log("the result is: " + random(array).name);
      // var answer = random(self.modes[modeIndex].className);
      self.answers.innerText = flush.name;
      self.icon.innerHTML = ("<img class='picturesRound' src=" + '"' + flush.image + '"' +
        '>');
      self.wheel.className = "wheelStatic";

      // Actions:
      if (flush.action !== undefined) {
        self.actions.innerText = flush.action;
        self.links.innerHTML = '<a href="' + flush.urls.foody + '">' + ' <img class="link-logo" ' + 'src="' + flush.logo + '" >' + '</a>';
      }



      // if (flush.audio !== undefined) {
      //   var song = flush.audio;
      //   song.play();
      // }

    }, 3000);
  };









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
