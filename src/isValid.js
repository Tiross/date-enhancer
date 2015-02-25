(function () {
  'use strict';

  if ('function' !== Date.prototype.isValid) {
    Date.prototype.isValid = function () {
      return this.getTime() === this.getTime();
    };
  }
})();
