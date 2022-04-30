function sos() {
  var firstnumberEl = +document.getElementById("firstnumber").value;
  var secondnumberEl = +document.getElementById("secondnumber").value;
  var thirdnumberEl = +document.getElementById("thirdnumber").value;
  if (
    firstnumberEl % 2 == 0 &&
    secondnumberEl % 2 == 0 &&
    thirdnumberEl % 2 == 0
  ) {
    var evenEl = 3;
    var oddEl = 0;
  } else if (
    (firstnumberEl % 2 == 0 && secondnumberEl % 2 == 0) ||
    (firstnumberEl % 2 == 0 && thirdnumberEl % 2 == 0) ||
    (secondnumberEl % 2 == 0 && thirdnumberEl % 2 == 0)
  ) {
    var evenEl = 2;
    var oddEl = 1;
  } else if (
    firstnumberEl % 2 == 0 ||
    secondnumberEl % 2 == 0 ||
    thirdnumberEl % 2 == 0
  ) {
    var evenEl = 1;
    var oddEl = 2;
  } else if (
    firstnumberEl % 2 !== 0 &&
    secondnumberEl % 2 !== 0 &&
    thirdnumberEl % 2 !== 0
  ) {
    var evenEl = 0;
    var oddEl = 3;
  } else {
    var evenEl = NaN;
    var oddEl = NaN;
  }
  document.getElementById(
    "result"
  ).innerHTML = `👉 có ${evenEl} số chẵn , ${oddEl} số lẻ`;
}
