'use strict';
(function () {

  // var COAT_COLORS = ['rgb(146, 100, 161)', 'rgb(215, 210, 55)', 'rgb(241, 43, 107)', 'rgb(101, 137, 164)', 'rgb(0, 0, 0)', 'rgb(215, 210, 55)', 'rgb(56, 159, 117)', 'rgb(241, 43, 107)'];
  // var EYES_COLORS = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple'];

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizard) {
    var rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.similarWizard.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };

    // var sameCoatAndEyesWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor &&
    //   it.colorEyes === eyesColor;
    // });
    //
    // var sameCoatWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor;
    // });
    // var sameEyesWizards = wizards.filter(function (it) {
    //   return it.colorEyes === eyesColor;
    // });
    //
    // var filteredWizards = sameCoatAndEyesWizards;
    // filteredWizards = filteredWizards.concat(sameCoatWizards);
    // filteredWizards = filteredWizards.concat(sameEyesWizards);
    // filteredWizards = filteredWizards.concat(wizards);
    //
    // window.uniqueWizards = filteredWizards.filter(function (it, i) {
    //   return filteredWizards.indexOf(it) === i;
    // });

    // window.similarWizard.render(window.uniqueWizards);

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(window.similarWizard.COAT_COLORS);
    this.style.fill = newColor;
    coatColor = newColor;
    updateWizards();
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(window.similarWizard.EYES_COLORS);
    this.style.fill = newColor;
    eyesColor = newColor;
    updateWizards();
  });

  var loadHandler = function (data) {
    wizards = data;
    updateWizards();
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
  var saveHandler = function () {
    window.setupWindow.classList.add('hidden');
  };

  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), saveHandler, errorHandler);
    evt.preventDefault();
  });

})();
