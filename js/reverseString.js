"use strict";

function tryCatch(number) {
  try {
    return number.split("").reverse().join("");
  } catch (err) {
    return `s.split is not a function:${number}`;
  }
}

console.log(tryCatch(1234));
