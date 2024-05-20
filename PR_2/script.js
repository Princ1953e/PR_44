function Circle(r) {
  let pie = 3.14;
  let area;
  area = pie * r * r;
  return area;
}
let r = 5;
let area = Circle(r);
document.getElementById("Ra").innerHTML = r;
document.getElementById("C").innerHTML = area;
