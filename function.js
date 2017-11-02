'use strict';

//Variables-Data--------------------------------------------------------------------------->

// var modes = {
//   food: foods,
//   travel: destinations,
//   prize: prizes,
//   custom: customs
// };


//FOOD------------------------------------------------------------------------------------->
var foods = [{
    name: "pizza",
    image: "./images/foods/pizza.jpg"
  }, {
    name: "burrito",
    image: "./images/foods/burrito.jpg"
  }, {
    name: "enpanada",
    image: "./images/foods/empanada.jpg"
  }, {
    name: "burger",
    image: "./images/foods/burger.jpg",
    url: "https://foody.com.cy/burgers"
  }, {
    name: "kebab",
    image: "./images/foods/kebab.jpg"
  }, {
    name: "sandwich",
    image: "./images/foods/sandwich.jpg"
  }, {
    name: "pasta",
    image: "./images/foods/pasta.jpg"
  },
  {
    name: "Souvlaki",
    image: "./images/foods/Souvlaki.jpg",
    urls: {
      foody: "https://foody.com.cy/souvlakia/"
    }
  },
  {
    name: "chinese",
    image: "./images/foods/pizza.jpg"
  },
  {
    name: "salad",
    image: "./images/foods/pizza.jpg",
    url: ""
  },


];

//TRAVEL------------------------------------------------------------------------------------->

var destinations = [{
    name: "Bali, Indonesia",
    image: "./images/destinations/bali.jpg"
  }, {
    name: "London, United Kingdom",
    image: "./images/destinations/london.jpg"
  }, {
    name: "Paris, France",
    image: "./images/destinations/paris.jpg"
  }, {
    name: "Rome, Italy",
    image: "./images/destinations/rome.jpg"
  }, {
    name: "New York City, New York",
    image: "./images/destinations/newyork.jpg"
  }, {
    name: "Crete, Greece",
    image: "./images/destinations/creta.jpg"
  }, {
    name: "Barcelona, Spain",
    image: "./images/destinations/barcelona.jpg"
  }, {
    name: "Siem Reap, Cambodia",
    image: "./images/destinations/seamreap.jpg"
  },
  {
    name: "Prague, Czech Republic",
    image: "./images/destinations/Prague.jpg"
  }, {
    name: "Phuket, Thailand",
    image: "./images/destinations/thailand.jpg"
  }, {
    name: "Instambul, Turkey",
    image: "./images/destinations/Instambul.jpg"
  }, {
    name: "Jamaica",
    image: "./images/destinations/Jamaica.jpg"
  }, {
    name: "Hoi An, Vietnam",
    image: "./images/destinations/HoiAn.jpg"
  }, {
    name: "Roatan, Bay Islands",
    image: "./images/destinations/Roatan.jpg"
  },
  {
    name: "Marakech, Morocco",
    image: "./images/destinations/marakech.jpg"
  },
  {
    name: "Rio de Janeiro, Brazil",
    image: "./images/destinations/rio.jpg"
  },
];


//PRIZES------------------------------------------------------------------------------------->
// var prizes = [];


//CUSTOM------------------------------------------------------------------------------------->

var custom = {
  name: "",
  opt: []
};

var customs = [];

//DICE------------------------------------------------------------------------------------->
var dice = [{
  name: "1",
  image: "./images/dice/d1.png"
}, {
  name: "2",
  image: "./images/dice/d2.png"
}, {
  name: "3",
  image: "./images/dice/d3.png"
}, {
  name: "4",
  image: "./images/dice/d4.png"
}, {
  name: "5",
  image: "./images/dice/d5.png"
}, {
  name: "6",
  image: "./images/dice/d6.png"
}];

var items = {
  destinations: destinations,
  dice: dice,
  foods: foods
};




//functions-------------------------------------------------------------------------------->

//RANDOMIZERRR
function random(array) {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
}

//Build custom array
function add(choice) {
  custom.opt.push(choice);
}
//Store array for re-use
function store() {
  customs.push(custom); //stores custom arrays
  custom = {
    name: "",
    opt: [] //clears custom array to get new things
  };
}

// Text Flashing
function text_shuffle(array) {
  var nIntervId = setInterval(function() {
      document.getElementById("input").innerHTML = random(array).name;
    },
    100);
  window.setTimeout(function() {
    clearInterval(nIntervId);
    //console.log("the result is: " + random(array).name);
    document.getElementById("input").innerHTML = random(array).name;
    document.getElementById("wheel").className = "roulette-image";
  }, 3000);
}


//Result
function result(array) {
  document.getElementById("wheel").className = "roulette";
  text_shuffle(array);

}




//MODES-------------------------------------------------------------------------------->

// function food_rnd() {
//   result(foods);
// }
//
// function travel_rnd() {
//   result(destinations);
// }
//
// function custom_rnd() {
//   result(custom);
// }
//
// function dice_rnd() {
//   result(dice);
// }


//Output------------------------------------------------------------------------------->
