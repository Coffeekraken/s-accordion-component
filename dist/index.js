"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _realHeight = _interopRequireDefault(require("coffeekraken-sugar/js/dom/realHeight"));

var _querySelectorLive = _interopRequireDefault(require("coffeekraken-sugar/js/dom/querySelectorLive"));

var _throttle = _interopRequireDefault(require("coffeekraken-sugar/js/utils/functions/throttle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setAccordionContentHeight($elm) {
  var isActive = $elm.classList.contains('active');
  $elm.style.transition = 'none';
  $elm.classList.add('active');
  $elm.style.height = '';
  var height = (0, _realHeight.default)($elm);
  $elm.style.transition = 'none'; // remove again the transitions cause the realHeight function reset them...

  if (!isActive) $elm.classList.remove('active');
  setTimeout(function () {
    $elm.style.transition = '';
  });
  $elm.style.height = "".concat(height, "px");
}

function setAccordionContentsHeight() {
  Array.from(document.querySelectorAll('.accordion__content'), function ($elm) {
    setAccordionContentHeight($elm);
  });
}

window.addEventListener('resize', (0, _throttle.default)(function (e) {
  setAccordionContentsHeight();
}, 250));
(0, _querySelectorLive.default)('.accordion__content', function ($elm) {
  setAccordionContentHeight($elm);

  if (!$elm._hasAccordionLoadedEventListener) {
    $elm._hasAccordionLoadedEventListener = true;
    $elm.addEventListener('load', function (e) {
      setAccordionContentHeight($elm);
    }, true);
  }
});
setAccordionContentsHeight();
var _default = setAccordionContentsHeight;
exports.default = _default;