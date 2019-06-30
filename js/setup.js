'use strict';
(function () {

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var START_COORDS_X = 1000;
  var START_COORDS_Y = 80;

  window.setupWindow = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = window.setupWindow.querySelector('.setup-close');
  var userNameInput = window.setupWindow.querySelector('.setup-user-name');

  var openPopup = function () {
    window.setupWindow.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.setupWindow.style.top = START_COORDS_Y + 'px';
    window.setupWindow.style.left = START_COORDS_X + 'px';
  };

  var closePopup = function () {
    window.setupWindow.classList.add('hidden');
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

})();
