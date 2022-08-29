let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".my-pick-color");
let span = document.querySelector("span");

if (window.localStorage.getItem("color")) {
  //if there is color in local storage
  //[1] Add color to div
  div.style.backgroundColor = window.localStorage.getItem("color");
  //[2] Remove active class from all li
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  //[3] Add active class to current element
  document
    .querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
} else {
  //if there is no color in local storage
}
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    //  console.log(e.currentTarget.dataset.color);
    //Remove active class from all li
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Add active class to current element
    e.currentTarget.classList.add("active");
    // Add clor to local storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    span.innerHTML = window.localStorage.getItem("color");
    //Change div background color
    div.style.backgroundColor = e.currentTarget.dataset.color;
  });
});
