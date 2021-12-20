"use strict";

function reverseString(s) {
  try {
    return s.split("").reverse().join("");
  } catch (err) {
    console.error("s.split is not a function");
  }
}

console.log(reverseString("123"));
