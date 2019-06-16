'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_QUANTITY = 4;

var getRandomNumber = function (array) {
  var random = Math.floor(Math.random() * array.length);
  return random;
};

var wizards = [];

for (var i = 0; i < WIZARD_QUANTITY; i++) {
  var nameRandom = getRandomNumber(WIZARD_NAMES);
  var coatColorRandom = getRandomNumber(COAT_COLORS);
  var eyesColorRandom = getRandomNumber(EYES_COLORS);

  var gamePlayer = {
    name: WIZARD_NAMES[nameRandom] + ' ' + WIZARD_SURNAMES[nameRandom],
    coatColor: COAT_COLORS[coatColorRandom],
    eyesColor: EYES_COLORS[eyesColorRandom]
  };

  wizards[i] = gamePlayer;
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragment = function () {
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    similarListElement.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(getFragment());

userDialog.querySelector('.setup-similar').classList.remove('hidden');
