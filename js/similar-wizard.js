'use strict';
(function () {

  window.similarWizard = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green']
  };
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var WIZARD_QUANTITY = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

  window.getRandomElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };

  var getWizardsData = function (quantity) {
    var wizards = [];
    for (var i = 0; i < quantity; i++) {
      var gamePlayer = {
        name: window.getRandomElement(WIZARD_NAMES) + ' ' + window.getRandomElement(WIZARD_SURNAMES),
        coatColor: window.getRandomElement(window.similarWizard.COAT_COLORS),
        eyesColor: window.getRandomElement(window.similarWizard.EYES_COLORS)
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

  similarListElement.appendChild(getFragment(wizards));

  window.setupWindow.querySelector('.setup-similar').classList.remove('hidden');

})();
