function ans(c) {
  let f;
  f = c * 1.8 + 32;
  return f;
}
let c = 100;
let CE = ans(c);
document.querySelector("span").innerHTML = CE;
