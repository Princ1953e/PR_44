function OE(num) {
  let Odd = "Your Enter Num Is Odd";
  let Even = "Your Enter Num Is Even";
  if (num % 2 == 1) {
    document.querySelector("h1").innerHTML = Odd;
  } else {
    document.querySelector("h1").innerHTML = Even;
  }
}

let num = 1;
document.querySelector("h2").innerHTML = num;

let Num = OE(num);
