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

var getRandomNumber = function (arrayLength) {
  return Math.floor(Math.random() * arrayLength);
};

var wizards = [];

for (var i = 0; i < WIZARD_QUANTITY; i++) {
  var nameRand = getRandomNumber(WIZARD_NAMES.length);
  var coatColorRand = getRandomNumber(COAT_COLORS.length);
  var eyesColorRand = getRandomNumber(EYES_COLORS.length);

  var gamePlayer = {
    name: WIZARD_NAMES[nameRand] + ' ' + WIZARD_SURNAMES[nameRand],
    coatColor: COAT_COLORS[coatColorRand],
    eyesColor: EYES_COLORS[eyesColorRand]
  };

  wizards[i] = gamePlayer;
}

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  return wizardElement;
};

var getFragment = function (fragment) {
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  return fragment;
};

similarListElement.appendChild(getFragment(document.createDocumentFragment()));

userDialog.querySelector('.setup-similar').classList.remove('hidden');
