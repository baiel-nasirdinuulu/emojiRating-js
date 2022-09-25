window.onload = function () {
  const emojiEl = document.querySelectorAll(".fa-regular");
  const starEl = document.querySelectorAll(".fa-star");
  const colorsArray = ["red", "orange", "blue", "brawn", "green"];

  upDateRating(0);

  starEl.forEach((star, index) => {
    star.addEventListener("click", () => {
      upDateRating(index);
    });
  });
  function upDateRating(index) {
    starEl.forEach((star, idx) => {
      if (idx < index + 1) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });
    emojiEl.forEach((emoji) => {
      emoji.style.transform = `translateX(-${index * 66}px)`;
      emoji.style.color = colorsArray[index];
    });
  }
};
