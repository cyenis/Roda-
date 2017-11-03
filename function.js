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
    image: "./images/foods/pizza.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/pizza/"
    }
  }, {
    name: "burrito",
    image: "./images/foods/burrito.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/mexican/"
    }
  }, {
    name: "enpanada",
    image: "./images/foods/empanada.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/mexican/"
    }
  }, {
    name: "burger",
    image: "./images/foods/burger.jpg",
    action: "Order from:",
    url: "https://foody.com.cy/burgers"
  }, {
    name: "kebab",
    image: "./images/foods/kebab.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/gyros/"
    }
  }, {
    name: "sandwich",
    image: "./images/foods/sandwich.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/sandwich_submarine/"
    }
  }, {
    name: "pasta",
    image: "./images/foods/pasta.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/pasta/"
    }
  },
  {
    name: "Souvlaki",
    image: "./images/foods/Souvlaki.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/souvlakia/"
    }
  },
  {
    name: "chinese",
    image: "./images/foods/chinese.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/kinezika/"
    }
  },
  {
    name: "salad",
    image: "./images/foods/salad.jpg",
    action: "Order from:",
    urls: {
      foody: "https://foody.com.cy/salad/"
    }
  },


];

//TRAVEL------------------------------------------------------------------------------------->

var destinations = [{
    name: "Bali, Indonesia",
    image: "./images/destinations/bali.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/bali'
    }
  }, {
    name: "London, United Kingdom",
    image: "./images/destinations/london.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/London'
    }
  }, {
    name: "Paris, France",
    image: "./images/destinations/paris.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/paris'
    }
  }, {
    name: "Rome, Italy",
    image: "./images/destinations/rome.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Rome'
    }
  }, {
    name: "New York City, New York",
    image: "./images/destinations/newyork.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/newyork'
    }
  }, {
    name: "Crete, Greece",
    image: "./images/destinations/creta.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Crete'
    }
  }, {
    name: "Barcelona, Spain",
    image: "./images/destinations/barcelona.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Barcelona'
    }
  }, {
    name: "Siem Reap, Cambodia",
    image: "./images/destinations/seamreap.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/seamreap'
    }
  },
  {
    name: "Prague, Czech Republic",
    image: "./images/destinations/Prague.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Prague'
    }
  }, {
    name: "Phuket, Thailand",
    image: "./images/destinations/thailand.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Phuket'
    }
  }, {
    name: "Instambul, Turkey",
    image: "./images/destinations/Instambul.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Instambul'
    }
  }, {
    name: "Jamaica",
    image: "./images/destinations/Jamaica.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Jamaica'
    }
  }, {
    name: "Hoi An, Vietnam",
    image: "./images/destinations/HoiAn.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/hoian'
    }
  }, {
    name: "Roatan, Bay Islands",
    image: "./images/destinations/Roatan.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Roatan'
    }
  },
  {
    name: "Marakech, Morocco",
    image: "./images/destinations/marakech.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/Marakech'
    }
  },
  {
    name: "Rio de Janeiro, Brazil",
    image: "./images/destinations/rio.jpg",
    action: "Book Accomodation:",
    urls: {
      foody: 'https://www.booking.com/riodejaneiro'
    }
  },
];

//FOOD------------------------------------------------------------------------------------->
var alcohol = [{
    name: "Beer",
    image: "./images/alcohol/beer.jpeg",
    urls: {}
  },
  {
    name: "Gin",
    image: "./images/alcohol/gin.jpg",
    urls: {}
  }, {
    name: "Jagermeister",
    image: "./images/alcohol/jagermeister.png",
    urls: {}
  }, {
    name: "Red Wine",
    image: "./images/alcohol/Redwine.jpg",
    urls: {}
  }, {
    name: "Rose Wine",
    image: "./images/alcohol/rosewine.jpg",
    urls: {}
  }, {
    name: "Rum",
    image: "./images/alcohol/rum.jpg",
    urls: {}
  }, {
    name: "Sangria",
    image: "./images/alcohol/sangria.jpeg",
    urls: {}
  }, {
    name: "Tequila",
    image: "./images/alcohol/tequila.jpg",
    urls: {}
  }, {
    name: "Vodka",
    image: "./images/alcohol/vodka.png",
    urls: {}
  }, {
    name: "Whiskey",
    image: "./images/alcohol/whiskey.jpg",
    urls: {}
  }, {
    name: "White Wine",
    image: "./images/alcohol/whitewine.jpeg",
    urls: {}
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
  foods: foods,
  alcohol: alcohol
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
