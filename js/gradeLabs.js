"use strict";

function gradeLabs(labs) {
  labs.forEach(function (val) {
    try {
      let result = val.runLab(3);
      console.log(`${val.student} code worked: ${result}`);
    } catch (TypeError) {
      console.log("TypeError: lab.runLab is not a function!");
    }
  });
}
let studentLabs2 = [
  {
    student: "Blake",
    myCode: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Jessica",
    runLab: function (num) {
      return Math.pow(num, num);
    },
  },
  {
    student: "Mya",
    runLab: function (num) {
      return num * num;
    },
  },
];

console.log(gradeLabs(studentLabs2));
