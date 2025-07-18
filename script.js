"use strict";
// Define the media query for 'md' breakpoint
document.querySelector(".container-text").classList.add("hidden");

function checkValueForm(valueA) {
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (regex.test(valueA)) {
    document.querySelector(".conBoxForm").classList.add("hidden");
    document.querySelector(".container-text").classList.remove("hidden");
  } else {
    alert("Email không hợp lệ. Vui lòng nhập lại.");
    document.querySelector("#email").value = "";
    document.querySelector("#email").focus();
  }
}
// Add event listener to the submit button
// When the button is clicked, it will check the value of the input field
document.querySelector(".btnSubmit").addEventListener("click", function () {
  let valueA = document.querySelector("#email").value;
  checkValueForm(valueA);
});

// Ẩn tất cả các box chứa thông tin
const boxAllCon = document.querySelectorAll("div.boxAllContain");
for (let i = 0; i < boxAllCon.length; i++) {
  console.log(boxAllCon[i]);
  const numberOfBoxAllContain = document.querySelectorAll(
    `div.boxAllContain${i + 1}`
  );
  for (let a = 0; a < numberOfBoxAllContain.length; a++) {
    numberOfBoxAllContain[a].classList.add("hidden");
  }
}

//ẩn các nút more button
const boxAllBtn = document.querySelectorAll("div.btnViewMore");
for (let i = 0; i < boxAllBtn.length; i++) {
  console.log(boxAllBtn[i]);
  let buttonMore = document.querySelector(`.btnViewMore${i + 1}`);
  buttonMore.classList.add("hidden");

  //hover chuot qua các box chứa thông tin thì more button hiện lên
  let boxTitle = document.querySelector(`.box-title${i + 1}`);
  boxTitle.addEventListener("mouseover", function () {
    buttonMore.classList.remove("hidden");
  });
  // hover chuot ra khỏi các box chứa thông tin thì more button ẩn đi
  boxTitle.addEventListener("mouseout", function () {
    buttonMore.classList.add("hidden");
  });
  buttonMore.addEventListener("click", function () {
    // khi click vào nút more thì hiện box chứa thông tin
    const numberOfBoxAllContain = document.querySelectorAll(
      `div.boxAllContain${i + 1}`
    );

    for (let a = 0; a < numberOfBoxAllContain.length; a++) {
      numberOfBoxAllContain[a].classList.toggle("hidden");
      // và ẩn nút more đi
      buttonMore.classList.add("btn-primary");
      buttonMore.classList.toggle("justifyBtn");
    }
    // buttonMore switches between "Show less" and "View more";
    if (buttonMore.innerText === "Show less") {
      buttonMore.innerText = "View more";
    } else {
      buttonMore.innerText = "Show less";
    }
  });
}
//hover các box chứa thông tin thì more button hiện lên
