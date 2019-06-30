'use strict';
(function () {

  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var mainWizard = document.querySelector('.setup-wizard');
  var wizardCoat = mainWizard.querySelector('.wizard-coat');
  var coatHiddenInput = document.querySelector('input[name="coat-color"]');
  var wizardEyes = mainWizard.querySelector('.wizard-eyes');
  var eyesHiddenInput = document.querySelector('input[name="eyes-color"]');
  var wizardFireballWrap = document.querySelector('.setup-fireball-wrap');
  var fireballHiddenInput = document.querySelector('input[name="fireball-color"]');

  wizardCoat.addEventListener('click', function () {
    var getWizardCoatColor = window.getRandomElement(window.similarWizard.COAT_COLORS);
    wizardCoat.style.fill = getWizardCoatColor;
    coatHiddenInput.value = getWizardCoatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var getWizardEyesColor = window.getRandomElement(window.similarWizard.EYES_COLORS);
    wizardEyes.style.fill = getWizardEyesColor;
    eyesHiddenInput.value = getWizardEyesColor;
  });

  wizardFireballWrap.addEventListener('click', function () {
    var getWizardFireballColor = window.getRandomElement(FIREBALL_COLORS);
    wizardFireballWrap.style.background = getWizardFireballColor;
    fireballHiddenInput.value = getWizardFireballColor;
  });
})();
