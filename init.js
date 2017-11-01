'use strict';
// window on dom content loaded > container = get element by id, app = new App(container) > app.buildSplash()


$(document).ready(function() {
  var main = document.getElementById("main");
  var app = new App(main);
  app.buildSplash();
  console.log('ready');
});


/*
document.getElementById("container");


var app = new App();

var test = 2;
*/
