'use strict';

//Variables-Data--------------------------------------------------------------------------->

var modes = {
  food: foods,
  travel: destinations,
  prize: prizes,
  custom: customs
};


//FOOD------------------------------------------------------------------------------------->
var foods = [{
    name: "pizza",
    image: ""
  }, {
    name: "burrito",
    image: ""
  }, {
    name: "enpanada",
    image: ""
  }, {
    name: "burger",
    image: "",
    url: "https://foody.com.cy/burgers"
  }, {
    name: "kebab",
    image: ""
  }, {
    name: "sandwich",
    image: ""
  }, {
    name: "pasta",
    image: ""
  },
  {
    name: "Souvlaki",
    image: "",
    urls: {
      foody: "https://foody.com.cy/souvlakia/"
    }
  },
  {
    name: "chinese",
    image: ""
  },
  {
    name: "salad",
    image: "",
    url: ""
  },
  {
    name: "italian",
    image: "",
    url: "https://deliveroo.es/en/italian-takeaway"
  }
];

//TRAVEL------------------------------------------------------------------------------------->
var destinations = [{
    name: "Bali, Indonesia",
    image: "./images/destinations/bali.png"
  }, {
    name: "London, United Kingdom",
    image: "./images/destinations/london.png"
  }, {
    name: "Paris, France",
    image: "./images/destinations/paris.png"
  }, {
    name: "Rome, Italy",
    image: "./images/destinations/rome.png"
  }, {
    name: "New York City, New York",
    image: "./images/destinations/newyork.png"
  }, {
    name: "Crete, Greece",
    image: "./images/destinations/creta.png"
  }, {
    name: "Barcelona, Spain",
    image: "./images/destinations/barcelona.png"
  }, {
    name: "Siem Reap, Cambodia",
    image: "./images/destinations/seamreap.png"
  },
  {
    name: "Prague, Czech Republic",
    image: "./images/destinations/Prague.png"
  }, {
    name: "Phuket, Thailand",
    image: "./images/destinations/thailand.png"
  }, {
    name: "Instambul, Turkey",
    image: "./images/destinations/Instambul.png"
  }, {
    name: "Jamaica",
    image: "./images/destinations/Jamaica.png"
  }, {
    name: "Hoi An, Vietnam",
    image: "./images/destinations/HoiAn.png"
  }, {
    name: "Roatan, Bay Islands",
    image: "./images/destinations/Roatan.png"
  },
  {
    name: "Marakech, Morocco",
    image: "./images/destinations/marakech.png"
  },
  {
    name: "Rio de Janeiro, Brazil",
    image: "./images/destinations/rio.png"
  },
];


//PRIZES------------------------------------------------------------------------------------->
var prizes = [];


//CUSTOM------------------------------------------------------------------------------------->

var custom = {
  name: "",
  opt: []
};

var customs = [];







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

function food_rnd() {
  result(foods);
}

function travel_rnd() {
  result(destinations);
}

function custom_rnd() {
  result(custom);
}


//Output------------------------------------------------------------------------------->
