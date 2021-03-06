function initGame(){

  let gameSet = R.compose( generateWrongAnswerData, generateGameSet )(images)
  renderGamePages(gameSet)
  eventListenerGamePage(gameSet)
  showPage('gamePage1')
}

function eventListenerGamePage(gameSet){
  [1,2,3,4,5].forEach(function(el,i){
    if(el<5){
      $('#gamePage'+ el).find('button').click(function(event){
        showPage('gamePage' + (Number(el) + 1))
        gameSet[i].userGuess = $(this)[0].innerHTML
        results.push(gameSet[i])
      })
      
      $('#gamePage'+ el).find('.game-page__button-emoji').click(function(event){  //same for icon
        showPage('gamePage' + (Number(el) + 1))
        gameSet[i].userGuess = $(this).parent().find('button')[0].innerHTML
        results.push(gameSet[i])
      })

    } else{
      $('#gamePage'+ el).find('button').click(function(event){
        gameSet[i].userGuess = $(this)[0].innerHTML
        results.push(gameSet[i])
        initRoundResult(results)
      })
      $('#gamePage'+ el).find('.game-page__button-emoji').click(function(event){  //same for icon
        gameSet[i].userGuess = $(this).parent().find('button')[0].innerHTML
        results.push(gameSet[i])
        initRoundResult(results)
      })
    }
  })
}

//
//Main functions
//

function renderGamePages(gameSet){
  [1,2,3,4,5].forEach(function(el, i){
    let answerType = randomiser2()
    const gamePage = Handlebars.compile(pages['gamePage'])({
      id:'gamePage'+ el,
      biggie:'assets/imgs/' + Object.keys( gameSet[i])[0]+ '.jpg',
      choiceL: String(gameSet[i][answerType[0]].emojiPath),
      buttonL: gameSet[i][answerType[0]].emotion[0],
      choiceR: String(gameSet[i][answerType[1]].emojiPath),
      buttonR: gameSet[i][answerType[1]].emotion[0],
    })
    addPage('gamePage' + el, gamePage)
  })
}
function renderResPages(gameSet){
  [1,2,3,4,5].forEach(function(el, i){
    $('#res'+ el).find('img').attr('src', 'assets/imgs/' + Object.keys( gameSet[i])[0]+ '.jpg' )
  })
}

function generateGameSet(images, username = 'john doe'){
  return randomiser(images).map(function(el, i, array){
    return {
      [el]:images[el][0],
      userGuess:'noresponse',
      username:username,
      apiGuess:apiWinner(images[el][0]['scores']),
      correctAnswer:{
        emotion:apiWinner(images[el][0]['scores']),
        emojiPath: 'assets/icons/' + emojiPath(apiWinner(images[el][0]['scores'])[0])
      }
    }
  })
}

//
//generic helpers
//

function generateWrongAnswerData(gameSet){
  return gameSet.map(function(el, index){
    el.wrongAnswer = {
      emotion:[getOtherEmotion(el.correctAnswer['emotion'][0])],
      emojiPath:'assets/icons/' + emojiPath(getOtherEmotion(el.correctAnswer['emotion'][0]))
    }
    return el
  })
}

function getOtherEmotion(emotion, pos){
  let emotions = ['happiness', 'sadness', 'anger', 'neutral','surprise']
  emotions.splice(emotions.indexOf(emotion), 1)
  return emotions[2]

  function randomNumber(){
    return ~~(Math.random()*5)
  }
}

function randomiser(images){
  return Object.keys(images).sort(function(){return .5 - Math.random()}).slice(0, 5)
}

function emojiPath(emotion){
  let dict = {
    'anger':'angry-emoji.svg', 'sadness':'sad-emoji.svg', 'surprise':'surprise-emoji.svg', 'neutral':'neutral-emoji.svg', 'happiness':'happy-emoji.svg'}
  return dict[emotion]
}

function apiWinner(scores) {
  let tempNumber = 0;
  let emotion;
  for(var prop in scores){
    if(scores[prop] > tempNumber && String(scores[prop]).indexOf('-') !== false){
      tempNumber = scores[prop];
      emotion = prop;
    }
  }
  return [emotion, tempNumber];
}

function eventListenerResultPages(){
  playAgain()
  lifeTime()
  roundResults()
}

function randomiser2(){
  let dict = ['correctAnswer', 'wrongAnswer']
  if(Math.random() > 0.5) {return dict}
  else{
    return [dict[1], dict[0]]
  }
}
