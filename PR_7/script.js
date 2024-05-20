function ans(f) {
  let c;
  c = (f - 32) / 1.8;
  return c;
}
let f = 41;
let CE = ans(f);
document.querySelector("span").innerHTML = CE;
