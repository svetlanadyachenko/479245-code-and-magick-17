'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var CLOUD_Y_DOWN = 270;
var GAP = 10;
var BAR_GAP = 50;
var FONT_GAP = 15;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var winTexts = ['Ура вы победили!', 'Список результатов:'];
  var winTextWidth = CLOUD_WIDTH;

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';

  for (var j = 0; j < winTexts.length; j++) {
    ctx.fillText(winTexts[j], CLOUD_X + GAP + FONT_GAP, CLOUD_Y + GAP + FONT_GAP + ((FONT_GAP) * j), winTextWidth, FONT_GAP);
  }

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y_DOWN - GAP * 2 - FONT_GAP - ((BAR_HEIGHT * times[i]) / maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y_DOWN - FONT_GAP + GAP);
    ctx.fillStyle = 'blue';
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y_DOWN - GAP - FONT_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_Y_DOWN - GAP - FONT_GAP, BAR_WIDTH, (-BAR_HEIGHT * times[i]) / maxTime);
    }
  }
};
