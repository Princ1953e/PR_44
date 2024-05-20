function ans(a, b, c) {
  let area;
  area = (b * b * (4 * a * c)) / (2 * a);
  return area;
}
let a = 10;
let b = 10;
let c = 10;
let area = ans(a, b, c);
document.querySelector("span").innerHTML = area;
