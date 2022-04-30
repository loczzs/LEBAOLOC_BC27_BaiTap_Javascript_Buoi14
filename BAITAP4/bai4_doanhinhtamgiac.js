function sos() {
  var firstnumberEl = +document.getElementById("firstnumber").value;
  var secondnumberEl = +document.getElementById("secondnumber").value;
  var thirdnumberEl = +document.getElementById("thirdnumber").value;
  if ((firstnumberEl === secondnumberEl) === thirdnumberEl) {
    var triangleEl = "hình tam giác đều";
  } else if (
    firstnumberEl === secondnumberEl ||
    firstnumberEl === thirdnumberEl ||
    secondnumberEl === thirdnumberEl
  ) {
    var triangleEl = " hình tam giác cân";
  } else if (
    firstnumberEl ** 2 === secondnumberEl ** 2 + thirdnumberEl ** 2 ||
    secondnumberEl ** 2 === firstnumberEl ** 2 + thirdnumberEl ** 2 ||
    thirdnumberEl ** 2 === firstnumberEl ** 2 + secondnumberEl ** 2
  ) {
    var triangleEl = "hình tam giác vuông";
  } else {
    var triangleEl = "một loại tam giác nào đó";
  }
  document.getElementById("result").innerHTML = ` 👉 ${ triangleEl}`;
}
