const $rating_list = document.querySelector("#rating");
const $total = document.querySelector("#total");
const $selected = document.querySelector("#selected");
const $ratingContent = document.querySelector("#rating-content");
const $thankYouContent = document.querySelector("#thank-you-content");
const $btnSubmit = document.querySelector("#submit");

document.addEventListener("DOMContentLoaded", function () {
  [1, 2, 3, 4, 5].forEach(function (item) {
    const $item = document.createElement("div");
    $item.setAttribute("class", "circle numbers");
    $item.id = item;
    $paragraph = document.createElement("p");
    $paragraph.innerText = item;
    $item.appendChild($paragraph);
    $rating_list.appendChild($item);
  });

  $selected.innerText = "0";

  $total.innerText =
    $rating_list.childNodes.length === 0 ? 0 : $rating_list.childNodes.length;
});

$rating_list.addEventListener("click", function (event) {
  event.preventDefault();

  if (event.target.classList.contains("numbers")) {
    $rating_list.childNodes.forEach(function (item) {
      if (item.id <= event.target.id) {
        item.classList.add("active");
        console.log(event.target.id);
        $selected.innerText = event.target.id;
      } else {
        item.classList.remove("active");
      }
    });
  }
});

$btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  if ($selected.innerText !== "0") {
    $ratingContent.classList.replace("show", "hide");
    $thankYouContent.classList.replace("hide", "show");
  }
});
