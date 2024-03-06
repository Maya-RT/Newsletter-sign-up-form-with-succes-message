const mainContainer = document.getElementById("main-container");
const successContainer = document.getElementById("succes-container");
const mainContainerText = document.querySelector(".main-container-text")
const subscribeBtn = document.querySelector(".subscribe-btn");
const dismissBtn = document.querySelector(".dismiss-btn");
const input = document.querySelector("input");
const small = document.querySelector("small");
const span = document.querySelector("span");

subscribeBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();

  if (inputValue === ""){
    mainContainerText.classList.add("error")
    small.style.display = "block"
  }else if(!isValidEmail (inputValue)){
    mainContainerText.classList.add("error")
    small.style.display = "block"
  }else{
    successContainer.style.display = "block"
    mainContainer.style.display = "none"
    span.innerHTML = inputValue
  }
});

dismissBtn.addEventListener("click", () => {
  successContainer.style.display = "none"
  mainContainer.style.display ="flex"
  input.value = ""
  mainContainerText.classList.remove("error")
  small.style.display = "none"
});

function isValidEmail(input) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test
  (input)
}