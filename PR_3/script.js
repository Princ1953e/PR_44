function Triangle(l, b) {
  let area;
  area = (l * b) / 2;
  return area;
}
let l = 5;
let b = 10;
let area = Triangle(l, b);
document.querySelector("span").innerHTML = area;
