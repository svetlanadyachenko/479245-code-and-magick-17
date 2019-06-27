'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_QUANTITY = 4;
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var START_COORDS_X = 1000;
var START_COORDS_Y = 80;

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var userNameInput = setup.querySelector('.setup-user-name');

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
  setup.style.top = START_COORDS_Y + 'px';
  setup.style.left = START_COORDS_X + 'px';
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

var onPopupEscPress = function (evt) {
  if (userNameInput !== document.activeElement && evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
.content
.querySelector('.setup-similar-item');

var getRandomElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getWizardsData = function (quantity) {
  var wizards = [];
  for (var i = 0; i < quantity; i++) {
    var gamePlayer = {
      name: getRandomElement(WIZARD_NAMES) + ' ' + getRandomElement(WIZARD_SURNAMES),
      coatColor: getRandomElement(COAT_COLORS),
      eyesColor: getRandomElement(EYES_COLORS)
    };
    wizards[i] = gamePlayer;
  }
  return wizards;
};

var wizards = getWizardsData(WIZARD_QUANTITY);

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var getFragment = function (data) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < data.length; i++) {
    fragment.appendChild(renderWizard(data[i]));
  }
  return fragment;
};

var mainWizard = document.querySelector('.setup-wizard');
var wizardCoat = mainWizard.querySelector('.wizard-coat');
var coatHiddenInput = document.querySelector('input[name="coat-color"]');
var wizardEyes = mainWizard.querySelector('.wizard-eyes');
var eyesHiddenInput = document.querySelector('input[name="eyes-color"]');
var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
var fireballHiddenInput = document.querySelector('input[name="fireball-color"]');

wizardCoat.addEventListener('click', function () {
  var getWizardCoatColor = getRandomElement(COAT_COLORS);
  wizardCoat.style.fill = getWizardCoatColor;
  coatHiddenInput.value = getWizardCoatColor;
});

wizardEyes.addEventListener('click', function () {
  var getWizardEyesColor = getRandomElement(EYES_COLORS);
  wizardEyes.style.fill = getWizardEyesColor;
  eyesHiddenInput.value = getWizardEyesColor;
});

wizardFireballWrap.addEventListener('click', function () {
  var getWizardFireballColor = getRandomElement(FIREBALL_COLORS);
  wizardFireballWrap.style.background = getWizardFireballColor;
  fireballHiddenInput.value = getWizardFireballColor;
});

similarListElement.appendChild(getFragment(wizards));

setup.querySelector('.setup-similar').classList.remove('hidden');
