"use strict";

// ADD Event On Element

const addEvenOnElement = function (elem, type, callback) {
  if (elem.length) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
};
