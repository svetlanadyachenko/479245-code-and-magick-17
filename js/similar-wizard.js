'use strict';
(function () {

  window.similarWizard = {
    COAT_COLORS: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES_COLORS: ['black', 'red', 'blue', 'yellow', 'green'],
    getRandomElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    }
  };
  // var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  // var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  // var WIZARD_QUANTITY = 4;

  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content;
  // .querySelector('.setup-similar-item');

  // var getWizardsData = function (quantity) {
  //   var wizards = [];
  //   for (var i = 0; i < quantity; i++) {
  //     var gamePlayer = {
  //       name: window.similarWizard.getRandomElement(WIZARD_NAMES) + ' ' + window.similarWizard.getRandomElement(WIZARD_SURNAMES),
  //       coatColor: window.similarWizard.getRandomElement(window.similarWizard.COAT_COLORS),
  //       eyesColor: window.similarWizard.getRandomElement(window.similarWizard.EYES_COLORS)
  //     };
  //     wizards[i] = gamePlayer;
  //   }
  //   return wizards;
  // };

  // var wizards = getWizardsData(WIZARD_QUANTITY);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var getFragment = function (data) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < 4; i++) {
      data[i] = window.similarWizard.getRandomElement(data);
      fragment.appendChild(renderWizard(data[i]));
    }
    return fragment;
  };

  var loadHandler = function (wizards) {
    getFragment(wizards);
    similarListElement.appendChild(getFragment(wizards));
    window.setupWindow.querySelector('.setup-similar').classList
      .remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: pink;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(loadHandler, errorHandler);

  var form = window.setupWindow.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), errorHandler, function () {
      window.setupWindow.classList.add('hidden');
    });
    evt.preventDefault();
  });

})();
