const innerPolygon = document.getElementById("inner-polygon");
const outer = document.getElementById("outer");
const heartBtn = document.getElementById("heart-btn");
const closeBtn = document.getElementById("close-btn");
const message1 = document.getElementById("message-1");
const message2 = document.getElementById("message-2");
const letter = document.getElementById("letter");

function toggleEnvelope() {
  outer.classList.toggle("outer-open");
  heartBtn.classList.toggle("hide");
  closeBtn.classList.toggle("show");
  message1.classList.toggle("hide");
  message2.classList.toggle("show");
  letter.classList.toggle("show");
}
