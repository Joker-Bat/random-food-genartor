const getFoodData = async () => {
  await fetch("https://foodish-api.herokuapp.com/api/")
    .then((respose) => respose.json())
    .then((data) => {
      console.log(data);
      document.getElementById("source").src = data.image;
    });
};

getFoodData();

var animateButton = function (e) {
  e.preventDefault;
  //reset animation
  e.target.classList.remove("animate");

  e.target.classList.add("animate");
  setTimeout(function () {
    e.target.classList.remove("animate");
  }, 700);
};

var bubblyButtons = document.getElementsByClassName("bubbly-button");

for (var i = 0; i < bubblyButtons.length; i++) {
  bubblyButtons[i].addEventListener("click", animateButton, false);
}
