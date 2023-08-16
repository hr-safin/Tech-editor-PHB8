// const colorInput =document.querySelector("input")

// colorInput.oninput = function(){
//     document.body.style.backgroundColor = colorInput.value
// }


const boldButton = document.getElementById("bold")
const text_area = document.getElementById("text-area")
let isBold = true

boldButton.addEventListener("click", function(){
    

    if(isBold === true){
        text_area.style.fontWeight = "bold"
    }else if(isBold === false){
        text_area.style.fontWeight = "normal"
    }

    isBold = !isBold;

    
})


const italic_button = document.getElementById("italic")

let isItalic = true
italic_button.addEventListener("click", function(){
   

   if(isItalic){
    text_area.style.fontStyle ="italic"
   }else if(isItalic === false){
    text_area.style.fontStyle ="normal"
   }

   isItalic = !isItalic
})


const underLineButton = document.getElementById("underline")

let isUnderline = true

underLineButton.addEventListener("click", function(){
    if(isUnderline === true){
        text_area.style.textDecoration = "underline"
    }else if(isUnderline === false){
        text_area.style.textDecoration = "none" 
    }

    isUnderline = !isUnderline
})

const leftAlign = document.getElementById("left")

let isLeft = true

leftAlign.addEventListener("click", function(){
    if(isLeft === true){
        text_area.style.textAlign = "left"
    }else if(isLeft === false){
        text_area.style.textAlign = "justify" 
    }
    isLeft = !isLeft
})

const centerAlign = document.getElementById("center")

let isCenter = true

centerAlign.addEventListener("click", function(){
    if(isCenter === true){
        text_area.style.textAlign = "center"
    }else if(isCenter === false){
        text_area.style.textAlign = "justify" 
    }
    isCenter = !isCenter
})

const rightAlign = document.getElementById("right")

let isRight = true

rightAlign.addEventListener("click", function(){
    if(isRight === true){
        text_area.style.textAlign = "right"
    }else if(isRight === false){
        text_area.style.textAlign = "justify" 
    }
    isRight = !isRight
})

const upperCase = document.getElementById("upper-case")

let isUppercase = true

upperCase.addEventListener("click", function(){
    if(isUppercase === true){
        text_area.style.textTransform = "uppercase"
    }else if(isUppercase === false){
        text_area.style.textTransform = "none" 
    }
    isUppercase = !isUppercase
})


const fontAdjust = document.getElementById("number-input")

fontAdjust.addEventListener("input", function(){
    text_area.style.fontSize = fontAdjust.value + "px"
})


const colorInput =document.querySelector("#color-id")

colorInput.addEventListener("input", function(){
    text_area.style.color = colorInput.value
})
