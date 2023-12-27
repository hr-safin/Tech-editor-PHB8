const boldButton = document.getElementById("bold");
const text_area = document.getElementById("text-area");
let isBold = true;

boldButton.addEventListener("click", function () {
  if (isBold) {
    text_area.style.fontWeight = "bold";
  } else if (isBold === false) {
    text_area.style.fontWeight = "normal";
  }

  isBold = !isBold;
});

const italic_button = document.getElementById("italic");

let isItalic = true;
italic_button.addEventListener("click", function () {
  if (isItalic) {
    text_area.style.fontStyle = "italic";
    italic_button.style.fontWeight = "bold";
  } else if (isItalic === false) {
    text_area.style.fontStyle = "normal";
    italic_button.style.fontWeight = "normal";
  }

  isItalic = !isItalic;
});

const underLineButton = document.getElementById("underline");

let isUnderline = true;

underLineButton.addEventListener("click", function () {
  if (isUnderline) {
    text_area.style.textDecoration = "underline";
    underLineButton.style.fontWeight = "bold";
  } else if (isUnderline === false) {
    text_area.style.textDecoration = "none";
    underLineButton.style.fontWeight = "normal";
  }

  isUnderline = !isUnderline;
});

const leftAlign = document.getElementById("left");

let isLeft = true;

leftAlign.addEventListener("click", function () {
  if (isLeft) {
    text_area.style.textAlign = "left";
    leftAlign.style.fontWeight = "bold";
  } else if (isLeft === false) {
    text_area.style.textAlign = "justify";
    leftAlign.style.fontWeight = "normal";
  }
  isLeft = !isLeft;
});

const centerAlign = document.getElementById("center");

let isCenter = true;

centerAlign.addEventListener("click", function () {
  if (isCenter) {
    text_area.style.textAlign = "center";
    centerAlign.style.fontWeight = "bold";
  } else if (isCenter === false) {
    text_area.style.textAlign = "justify";
    centerAlign.style.fontWeight = "normal";
  }
  isCenter = !isCenter;
});

const rightAlign = document.getElementById("right");

let isRight = true;

rightAlign.addEventListener("click", function () {
  if (isRight) {
    text_area.style.textAlign = "right";
    rightAlign.style.fontWeight = "bold";
  } else if (isRight === false) {
    text_area.style.textAlign = "justify";
    rightAlign.style.fontWeight = "normal";
  }
  isRight = !isRight;
});

const upperCase = document.getElementById("upper-case");

let isUppercase = true;

upperCase.addEventListener("click", function () {
  if (isUppercase) {
    text_area.style.textTransform = "uppercase";
    upperCase.style.fontWeight = "bold";
  } else if (isUppercase === false) {
    text_area.style.textTransform = "none";
    upperCase.style.fontWeight = "normal";
  }
  isUppercase = !isUppercase;
});

const fontAdjust = document.getElementById("number-input");

fontAdjust.addEventListener("input", function () {
  text_area.style.fontSize = fontAdjust.value + "px";
});

const colorInput = document.querySelector("#color-id");

colorInput.addEventListener("input", function () {
  text_area.style.color = colorInput.value;
});
