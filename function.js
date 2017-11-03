'use strict';

//Variables-Data--------------------------------------------------------------------------->

// var modes = {
//   food: foods,
//   travel: destinations,
//   prize: prizes,
//   custom: customs
// };

var audioRoll = new Audio('./music/roll.mp3');
// var ed = new Audio('./music/Edshape.mp3')
// var rnb = new Audio('./music/turndown.mp3')
// var latin = new Audio('./music/vivir.mp3')


//FOOD------------------------------------------------------------------------------------->
var foods = [{
    name: "pizza",
    image: "./images/foods/pizza.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/pizza/"
    }
  }, {
    name: "burrito",
    image: "./images/foods/burrito.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/mexican/"
    }
  }, {
    name: "enpanada",
    image: "./images/foods/empanada.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/mexican/"
    }
  }, {
    name: "burger",
    image: "./images/foods/burger.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    url: "https://foody.com.cy/burgers"
  }, {
    name: "kebab",
    image: "./images/foods/kebab.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/gyros/"
    }
  }, {
    name: "sandwich",
    image: "./images/foods/sandwich.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/sandwich_submarine/"
    }
  }, {
    name: "pasta",
    image: "./images/foods/pasta.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/pasta/"
    }
  },
  {
    name: "Souvlaki",
    image: "./images/foods/Souvlaki.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/souvlakia/"
    }
  },
  {
    name: "chinese",
    image: "./images/foods/chinese.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/kinezika/"
    }
  },
  {
    name: "salad",
    image: "./images/foods/salad.jpg",
    action: "Order from:",
    logo: "./images/foody.png",
    urls: {
      foody: "https://foody.com.cy/salad/"
    }
  },


];

//TRAVEL------------------------------------------------------------------------------------->

var destinations = [{
    name: "Bali",
    image: "./images/destinations/bali.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/bali'
    }
  }, {
    name: "London",
    image: "./images/destinations/london.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/London'
    }
  }, {
    name: "Paris",
    image: "./images/destinations/paris.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/paris'
    }
  }, {
    name: "Rome",
    image: "./images/destinations/rome.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Rome'
    }
  }, {
    name: "New York",
    image: "./images/destinations/newyork.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/newyork'
    }
  }, {
    name: "Crete",
    image: "./images/destinations/creta.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Crete'
    }
  }, {
    name: "Barcelona",
    image: "./images/destinations/barcelona.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Barcelona'
    }
  }, {
    name: "Siem Reap",
    image: "./images/destinations/seamreap.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/seamreap'
    }
  },
  {
    name: "Prague",
    image: "./images/destinations/Prague.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Prague'
    }
  }, {
    name: "Phuket",
    image: "./images/destinations/thailand.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Phuket'
    }
  }, {
    name: "Instambul",
    image: "./images/destinations/Instambul.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Instambul'
    }
  }, {
    name: "Jamaica",
    image: "./images/destinations/Jamaica.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Jamaica'
    }
  }, {
    name: "Hoi An",
    image: "./images/destinations/HoiAn.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/hoian'
    }
  }, {
    name: "Roatan",
    image: "./images/destinations/Roatan.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Roatan'
    }
  },
  {
    name: "Marakech",
    image: "./images/destinations/marakech.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/Marakech'
    }
  },
  {
    name: "Rio de Janeiro",
    image: "./images/destinations/rio.jpg",
    action: "Book Accomodation:",
    logo: "./images/booking.png",
    urls: {
      foody: 'https://www.booking.com/riodejaneiro'
    }
  },
];

//alcohol------------------------------------------------------------------------------------->
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



//Games------------------------------------------------------------------------------------->
var games = [{
    name: "ARKANOID",
    image: "./images/games/cristian.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://cristiandiazz.github.io/arkanoid/"
    }
  },
  {
    name: "BLACKJACK",
    image: "./images/games/dafne.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://dafneolca.github.io/BlackJack/"
    }
  },
  {
    name: "TICTAC",
    image: "./images/games/felice.jpg",
    action: "Play:",
    logo: "./images/play.jpg",
    urls: {
      foody: "https://xxxelf.github.io/game/"
    }
  },
  {
    name: "WACK",
    image: "./images/games/torgeir.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://torgeirbeyer.github.io/project1-ironhack/"
    }
  },
  {
    name: "GOOGLED",
    image: "./images/games/cristina.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://crismoreno.github.io/googled/"
    }
  },
  {
    name: "HOMER",
    image: "./images/games/juan.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://jcuadrad.github.io/homeristoofat/"
    }
  },
  {
    name: "COLORIFY",
    image: "./images/games/clara.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://claraameller.github.io/colorify/"
    }
  },
  {
    name: "SUBWARFARE",
    image: "./images/games/jordi.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://joordiii.github.io/project_game/"
    }
  },
  {
    name: "BRUCE",
    image: "./images/games/sara.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://sarahfontes.github.io/Bruce-in-the-Maz"
    }

  },
  {
    name: "DON'T DRINK",
    image: "./images/games/dominik.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://dlasch089.github.io/first-game/"
    }
  },
  {
    name: "DIVE",
    image: "./images/games/lucas.jpg",
    action: "Play:",
    logo: "./images/play.png",
    urls: {
      foody: "https://lacazeto.github.io/ironhack_project1/"
    }

  }


];
// CLARA AMELLER -->https://claraameller.github.io/colorify/
// DOM https://dlasch089.github.io/first-game/
// SARAH FONTES --> https://sarahfontes.github.io/Bruce-in-the-Maze/
// https://joordiii.github.io/project_game/
// CRISTIAN DIAZ --> https://cristiandiazz.github.io/arkanoid/
// DAFNE OLCA --> https://dafneolca.github.io/BlackJack/
// FELICE POZZI --> https://xxxelf.github.io/game/
// JUAN CUADRA --> https://jcuadrad.github.io/homeristoofat/
// TORGEIR BEYER --> https://torgeirbeyer.github.io/project1-ironhack/
// SARAH FONTES --> https://sarahfontes.github.io/Bruce-in-the-Maze/
// CRISTINA MORENO --> https://crismoreno.github.io/googled/
// https://lacazeto.github.io/ironhack_project1/ lucas Cazeto



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

//coin------------------------------------------------------------------------------------->
var euro = [{
  name: "Heads",
  image: "./images/coins/2euro2.png"
}, {
  name: "Tails",
  image: "./images/coins/2euro1.png"
}];

//WebDev memes------------------------------------------------------------------------------>
var webdev = [{
    name: "CSS SUCKS",
    image: "http://gph.to/2A2JC8b"
  }, {
    name: "MAGIC",
    image: "./images/webdev/magic.gif"
  }, {
    name: "WTF",
    image: "./images/webdev/wtf.gif"
  }, {
    name: "TYPE",
    image: "./images/webdev/jimtype.gif"
  }, {
    name: "CODE WORKS",
    image: "./images/webdev/codeworks.gif"
  }, {
    name: "SERIOUSLY?",
    image: "./images/webdev/seriously.gif"
  }, {
    name: "TYPE",
    image: "./images/webdev/homer.gif"
  },
  {
    name: "REPEAT",
    image: "./images/webdev/sleeppc.gif"
  },
  {
    name: "LANGAUGES",
    image: "./images/webdev/lang.gif"
  }

];

//MUSIC------------------------------------------------------------------------------------->
var music = [{
  //   name: "POP",
  //   image: "./images/alcohol/beer.jpeg",
  //   audio: 'ed',
  //   urls: {}
  // },
  // {
  //   name: "RNB",
  //   image: "./images/alcohol/whitewine.jpeg",
  //   audio: 'rnb',
  //   urls: {}
  // },
  // {
  //   name: "LATIN",
  //   image: "./images/alcohol/whitewine.jpeg",
  //   audio: 'latin',
  //   urls: {}
}];




var items = {
  destinations: destinations,
  dice: dice,
  foods: foods,
  alcohol: alcohol,
  euro: euro,
  webdev: webdev,
  music: music,
  games: games
};




//functions-------------------------------------------------------------------------------->




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




//Result
function result(array) {
  document.getElementById("wheel").className = "roulette";
  text_shuffle(array);

}


//RANDOMIZERRR
// function random(array) {
//   var random = Math.floor(Math.random() * array.length);
//   return array[random];
// }

// Text Flashing
// function text_shuffle(array) {
//   var nIntervId = setInterval(function() {
//       document.getElementById("input").innerHTML = random(array).name;
//     },
//     100);
//   window.setTimeout(function() {
//     clearInterval(nIntervId);
//     //console.log("the result is: " + random(array).name);
//     document.getElementById("input").innerHTML = random(array).name;
//     document.getElementById("wheel").className = "roulette-image";
//   }, 3000);
// }


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
