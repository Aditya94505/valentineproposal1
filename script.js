const yesBtn = document.getElementById("yes");

const noBtn = document.getElementById("no");

const yayText = document.getElementById("yay");

const yayText1 = document.getElementById("yay1");

const can1 = document.getElementById("can1");

const can = document.getElementById("can");

noBtn.addEventListener("click", () => {
  yesBtn.style.width = `${yesBtn.offsetWidth + 20}px`;

  yesBtn.style.height = `${yesBtn.offsetHeight + 20}px`;

  noBtn.style.width = `${noBtn.offsetWidth - 10}px`;

  noBtn.style.height = `${noBtn.offsetHeight - 10}px`;
});

yesBtn.addEventListener("click", () => {
  yayText.style.display = "block";

  yayText1.style.display = "block";

  can.style.display = "none";

  can1.style.display = "none";
});