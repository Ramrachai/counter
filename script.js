let counter, count, increase, decrease, btns;

count = 0;
counter = document.querySelector(".counter");
btns = document.querySelector(".btns");
increase = document.querySelector(".increase");
decrease = document.querySelector(".decrease");

increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);
btns.addEventListener("click", changeColor);

function increment() {
  count++;
  counter.innerHTML = count;
}

function decrement() {
  count--;
  counter.innerHTML = count;
}

function changeColor() {
  var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
  color = "#";
  for (i = 0; i < 6; i++) {
    var random = Math.floor(Math.random() * n.length);
    color = color + n[random];
  }
  if (count != 0) {
    counter.style.color = color;
  } else {
    counter.style.color = "black";
  }
}
