function Rectangle(l, b) {
  let area;
  area = l * b;
  return area;
}
let l = 5;
let b = 10;
let area = Rectangle(l, b);
document.querySelector("span").innerHTML = area;
