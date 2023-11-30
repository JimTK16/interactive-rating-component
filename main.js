const ratingNodeLists = document.querySelectorAll(".rating");
const submitBtn = document.querySelector(".action");

let selectedRating;

const ratingClickHandler = (btn) => {
  ratingNodeLists.forEach((btn) => btn.classList.remove("selected"));
  btn.classList.add("selected");
  selectedRating = btn.innerText;
};

const submitHandler = () => {
  if (selectedRating === undefined) {
    window.alert("Please select a rating.");
    return;
  }

  console.log(selectedRating);
  location.href = "thankyou.html?rating=" + selectedRating;
};

ratingNodeLists.forEach((btn) =>
  btn.addEventListener("click", () => ratingClickHandler(btn))
);
submitBtn.addEventListener("click", submitHandler);
