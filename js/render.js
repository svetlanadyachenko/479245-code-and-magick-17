'use strict';
(function () {

  var wizardTemplate = document.querySelector('#similar-wizard-template').content;

  var renderWizard = function (wizard) {
    var element = wizardTemplate.cloneNode(true);
    var wizardElement = element.querySelector('.wizard');

    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    element.querySelector('.setup-similar-label').textContent = wizard.name;

    return element;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var limitData = data.slice(0, 4);
    similarList.innerHTML = '';
    for (var i = 0; i < limitData.length; i++) {
      similarList.appendChild(renderWizard(limitData[i]));
    }
    similar.classList.remove('hidden');
  };

})();
