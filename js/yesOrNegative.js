"use strcit";

function negativOrZero(num) {
  try {
    if (+num > 0) {
      throw "yes";
    }
    if (+num === 0) {
      throw "zero";
    }
    if (+num < 0) {
      throw "negativ";
    }
  } catch (err) {
    console.log(err);
  }
}

negativOrZero(0);
