document.addEventListener("DOMContentLoaded", function () {
  let count = 0;

  const counter = document.getElementById("counter");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");
  const resetBtn = document.getElementById("reset");

  increaseBtn.addEventListener("click", () => {
      count++;
      if (count > 10)
        count = 10
      counter.textContent = count;
  });

  decreaseBtn.addEventListener("click", () => {
      count--;
      if (count < 0)
        count = 0
      counter.textContent = count;
  });

  resetBtn.addEventListener("click", () => {
      count = 0;
      counter.textContent = count;
  });
});
