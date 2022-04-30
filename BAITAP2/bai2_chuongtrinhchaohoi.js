function sos() {
  var chooseEl = document.getElementById("choose").value;
  if (chooseEl === "O") {
    var hiEl = "người lạ ơi";
  }
  if (chooseEl === "B") {
    var hiEl = "BỐ";
  }
  if (chooseEl === "M") {
    var hiEl = "MẸ";
  }
  if (chooseEl === "A") {
    var hiEl = "Anh Trai";
  }
  if (chooseEl === "E") {
    var hiEl = "Em Gái";
  }
document.getElementById("result").innerHTML = `👉 xin chào ${hiEl} !`;
}
