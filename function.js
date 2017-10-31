'use strict';

//Variables-Data--------------------------------------------------------------------------->
var mode = "idle";



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
    image: ""
  }, {
    name: "London, United Kingdom",
    image: ""
  }, {
    name: "Paris, France",
    image: ""
  }, {
    name: "Rome, Italy",
    image: ""
  }, {
    name: "New York City, New York",
    image: ""
  }, {
    name: "Crete, Greece",
    image: ""
  }, {
    name: "Barcelona, Spain",
    image: ""
  }, {
    name: "Siem Reap, Cambodia",
    image: ""
  },
  {
    name: "Prague, Czech Republic",
    image: ""
  }, {
    name: "Phuket, Thailand",
    image: ""
  }, {
    name: "Instambul, Turkey",
    image: ""
  }, {
    name: "Jamaica",
    image: ""
  }, {
    name: "Hoi An, Vietnam",
    image: ""
  }, {
    name: "Roatan, Bay Islands",
    image: ""
  },
  {
    name: "Marakech, Morocco",
    image: ""
  },
  {
    name: "Rio de Janeiro, Brazil",
    image: ""
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
    document.getElementById("wheel").className = "image";
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
