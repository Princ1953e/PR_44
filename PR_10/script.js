function S(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;

  document.getElementById("A").innerHTML = a;
  document.getElementById("B").innerHTML = b;
}

let a = 1;
let b = 10;
document.getElementById("AA").innerHTML = a;
document.getElementById("BB").innerHTML = b;
let Num = S(a, b);
