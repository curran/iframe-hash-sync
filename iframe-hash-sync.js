// UMD boilerplate from https://github.com/umdjs/umd/blob/master/templates/returnExports.js
// Supports AMD, CommonJS, and browser global (iFrameHashSync).
(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.iFrameHashSync = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {

  // Accepts the iFrame DOM node.
  function iFrameHashSync(iFrame){

    // Propagate changes from inner page to outer page.
    iFrame.contentWindow.addEventListener('hashchange', function () {
      window.location.hash = iFrame.contentWindow.location.hash;
    });
  }

  return iFrameHashSync;
}));
