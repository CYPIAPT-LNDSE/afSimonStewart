'use strict';

var pages = {
  'landing': '<div class="landing-page" id=\'landing\' style=\'display:none;\'>\n  <div class="col-xs-10 col-xs-offset-1">\n  <div class="landing-page__header">\n  <img src="assets/icons/logo.svg" alt="" class="img-responsive landing-page__logo">\n  <hr />\n  <h1 class="landing-page__title">Face It</h1>\n  <hr />\n  </div>\n  <form>\n  <div class="form-group">\n  <label class="name-form" for="first-name">What\'s Your First Name?</label>\n  <input type="text" class="form-control" id="first-name" placeholder="Emma">\n  </div>\n  </form>\n  <button type="button" class="btn btn-default btn-lg btn-block" id="start">Start</button>\n  </div>\n  </div> ',
  'intro': '<div class="intro-page" style=\'display:none;\' id=\'intro\'>\n  <div class="col-xs-12">\n  <div class="intro-page__explanation">\n  <h1 id=\'userName\'>Hi, {{username}}!</h1>\n  <p><strong style="color: #66938F">Face It</strong> is a game about recognising emotions.</p>\n  <hr>\n  <p class="intro-page__explanation-p-margin">It\'s based on a computer programme called Emotion API.</p>\n  <p>Emotion API can detect emotions in photos.</p>\n  <hr>\n  <p class="intro-page__explanation-p-margin">We\'re going to show you a photo of a face and two emotions to choose from.</p>\n  <p>Pick which emotion you\'re most sure the face is expressing.</p>\n  <hr>\n  <p class="intro-page__explanation-p-margin">After five faces, we\'ll compare your choices to Emotion API\'s!</p>\n  </div>\n  <div class="intro-page__level-bar--label">\n  <p>You are at Level 1</p>\n  </div>\n  <div class="col-xs-12 intro-page__level-bar">\n  <p class="intro-page__level-bar-component intro-page__level-bar-component--active">1</p>\n  <p class="intro-page__level-bar-component intro-page__level-bar-component">2</p>\n  <p class="intro-page__level-bar-component intro-page__level-bar-component">3</p>\n  <p class="intro-page__level-bar-component intro-page__level-bar-component">4</p>\n  <p class="intro-page__level-bar-component intro-page__level-bar-component">5</p>\n  </div>\n  <button type="button" class="btn btn-default btn-lg btn-block" id="startGame">Continue</button>\n  </div>\n  </div>\n  ',
  'gamePage': '<div class="game-page" id=\'{{id}}\' style=\'display:none;\'>\n  <div class="game-page-content">\n  <div class="col-xs-12 game-page__image-container">\n  <img src="{{biggie}}" class="img-responsive" alt="Face" id=\'biggie\'>\n  </div>\n  <div class="col-xs-6 game-page__button">\n  <img src="{{choiceL}}" class="game-page__button-emoji" alt="Happy" id=\'choiceL\'>\n  <button type="button" class="btn btn-default btn-lg btn-block" id=\'buttonL\'>{{buttonL}}</button>\n  </div>\n  <div class="col-xs-6 game-button">\n  <img src="{{choiceR}}" class="game-page__button-emoji" alt="Sad" id=\'choiceR\'>\n  <button type="button" class="btn btn-default btn-lg btn-block" id="buttonR">{{buttonR}}</button>\n  </div>\n  </div>\n  </div>',
  'roundResultContainer': '<div class="round-results-page" style="display:none" id=\'roundResult\'>\n  <div class="round-results-page__header">\n  <h1>Results this round:</h1>\n  </div>\n  <hr>\n  {{{roundAnswers}}}\n  <div class="col-xs-12 round-results-page__results-comparison" id=\'risultatone\'>\n  <h2>You agreed with Emotion API {{risultatone}} of the time</h2>\n  </div>\n  <div class="col-xs-6">\n  <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id=\'playAgain1\'>Play Again</button>\n  </div>\n  <div class="col-xs-6">\n  <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id=\'lifeTime\'>Lifetime Results</button>\n  </div>\n  </div>',
  'roundAnswer': '\n  <div class="col-xs-10 col-xs-offset-1 round-results-page__result-container">\n  <div class="round-results-page__result" id=\'res1\'>\n  <img src="{{imagePath}}" class="img-responsive round-results-page__result-img" alt="Face" >\n  <div class="round-results-page__result-text">\n  <p>You said the face was {{userResult}}</p>\n  <p>Emotion API was {{apiConfidanceValue}}% sure it was {{apiEmotion}}</p>\n  </div>\n  </div>\n  </div>\n  ',
  'lifeTimeResults': '<div class="lifetime-results-page" id=\'lifeTimePage\' style=\'display:none;\'>\n  <div class="lifetime-results-page__disclaimer">\n  <p>This is a prototype app, so not all the features are working yet.</p>\n  <hr>\n  <p>Here is where you\'ll track your progress in the game.</p>\n  <p>This is what it might look like.</p>\n  <hr>\n  <p>Thank you for testing <strong style="color: #66938F">Face It</strong>!</p>\n  </div>\n  <div class="lifetime-results-page__key">\n  <div class="col-xs-6 text-center">\n  <img src="assets/icons/user-icon.svg" class="img-responsive" alt="User Icon">\n  <p>You</p>\n  </div>\n  <div class="col-xs-6 text-center">\n  <img src="assets/icons/api-icon.svg" class="img-responsive" alt="API Icon">\n  <p>Emotion API</p>\n  </div>\n  </div>\n  <div class="lifetime-results-page__emotion-results">\n  <h2>Happiness</h2>\n  <p>How often did you answer happiness, compared to Emotion API?</p>\n  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">\n  <p>Your weekly progress</p>\n  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">\n  </div>\n  <hr>\n  <div class="lifetime-results-page__emotion-results">\n  <h2>Sadness</h2>\n  <p>How often did you answer sadness, compared to Emotion API?</p>\n  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">\n  <p>Your weekly progress</p>\n  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">\n  </div>\n  <hr>\n  <div class="lifetime-results-page__emotion-results">\n  <h2>Neutral</h2>\n  <p>How often did you answer neutral, compared to Emotion API?</p>\n  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">\n  <p>Your weekly progress</p>\n  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">\n  </div>\n  <hr>\n  <div class="lifetime-results-page__emotion-results">\n  <h2>Surprise</h2>\n  <p>How often did you answer surprise, compared to Emotion API?</p>\n  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">\n  <p>Your weekly progress</p>\n  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">\n  </div>\n  <hr>\n  <div class="lifetime-results-page__emotion-results">\n  <h2>Anger</h2>\n  <p>How often did you answer anger, compared to Emotion API?</p>\n  <img src="assets/icons/api-comparison.svg" class="img-responsive" alt="API comparison graph">\n  <p>Your weekly progress</p>\n  <img src="assets/icons/personal-comparison.svg" class="img-responsive" alt="Personal comparison graph">\n  </div>\n  <hr>\n  <div class="lifetime-results-page__feedback">\n  <h2>You could work on:</h2>\n  <ul>\n  <li>Anger</li>\n  <li>Neutral</li>\n  </ul>\n  </div>\n  <hr>\n  <div class="col-xs-6">\n  <button type="button" class="btn btn-default btn-lg btn-block results-page__button"id=\'playAgain2\' >Play Again</button>\n  </div>\n  <div class="col-xs-6">\n  <button type="button" class="btn btn-default btn-lg btn-block results-page__button" id=\'roundResults\'>Round Results</button>\n  </div>\n  </div>'
};
