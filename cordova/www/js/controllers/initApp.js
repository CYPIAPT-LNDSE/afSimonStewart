'use strict';

function loader() {

  var db = new PouchDB('localDB');

  $('#main').append(pages['landing']);

  $('#landing').show("slide", { direction: "left" }, 500);
  $('#start').click(function () {
    $('#main').append(Handlebars.compile(pages['intro'])({
      username: $('#first-name').val()
    }));
    $('#landing').hide();
    $('#intro').show("slide", { direction: "left" }, 500);

    $('#startGame').click(function () {
      initGame();
      $('#intro').hide();
      $('#gamePage1').show("slide", { direction: "left" }, 500);
    });
  });
}
$(document).ready(loader);
//# sourceMappingURL=initApp.js.map
//# sourceMappingURL=initApp.js.map