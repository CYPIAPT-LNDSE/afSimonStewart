function initApp(){
  $('#main').append(pages['landing'])
  $('#main').append(pages['intro'])
  $('#main').append(pages['roundResult'])


  $('#landing').show("slide", { direction: "left" }, 500)
  $('#start').click(function(){
    $('#landing').hide()
    $('#intro').show("slide", { direction: "left" }, 500) 
  })

  $('#introStart').click(function(){
    initGame()
    $('#intro').hide()
    $('#gamePage1').show("slide", { direction: "left" }, 500)
  })
}

$(document).ready(initApp)
