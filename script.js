const boldButton = document.getElementById("bold");
const text_area = document.getElementById("text-area-container");
let isBold = true;

boldButton.addEventListener("click", function () {
  if (isBold) {
    text_area.style.fontWeight = "bold";
    boldButton.style.fontWeight = "bold";
  } else if (isBold === false) {
    text_area.style.fontWeight = "normal";
    boldButton.style.fontWeight = "normal";
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

const fontFamily = document.getElementById("font-family")

fontFamily.addEventListener("change", function(){
  let selectedField = fontFamily.value
  text_area.style.fontFamily = selectedField
})

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


document.getElementById("addText").addEventListener("click", function () {
  let textArea1 = document.createElement("div");
  textArea1.contentEditable = true;
  textArea1.style.width = "10%";
  textArea1.style.height = "50px"; // Set an initial height
  textArea1.style.resize = "both";
  textArea1.style.paddingLeft = "2px";
  textArea1.style.paddingTop = "2px";
  textArea1.style.overflow = "auto";
  textArea1.style.border = "1px solid black";
  textArea1.classList.add("draggable");

  document.getElementById("text-area-container").appendChild(textArea1);

  // Add drag and resize functionality using pure JavaScript
  makeElementDraggable(textArea1);
  makeElementResizable(textArea1);
});

function makeElementDraggable(element) {
  let isDragging = false;
  let offsetX, offsetY;

  element.addEventListener("mousedown", function (e) {
    isDragging = true;
    offsetX = e.clientX - element.getBoundingClientRect().left;
    offsetY = e.clientY - element.getBoundingClientRect().top;

    // Bring the element to the front
    element.style.zIndex = "1000";
  });

  document.addEventListener("mousemove", function (e) {
    if (isDragging) {
      element.style.position = "absolute";
      element.style.left = e.clientX - offsetX + "px";
      element.style.top = e.clientY - offsetY + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isDragging = false;
    
    // Reset the z-index after dragging
    element.style.zIndex = "auto";
  });
}
function makeElementResizable(element) {
  let isResizing = false;
  let currentX, currentY, initialWidth, initialHeight;

  const handle = document.createElement("div");
  handle.className = "resize-handle";
  element.appendChild(handle);

  handle.addEventListener("mousedown", function (e) {
    isResizing = true;
    currentX = e.clientX;
    currentY = e.clientY;
    initialWidth = parseFloat(
      getComputedStyle(element, null).getPropertyValue("width")
    );
    initialHeight = parseFloat(
      getComputedStyle(element, null).getPropertyValue("height")
    );
  });

  document.addEventListener("mousemove", function (e) {
    if (isResizing) {
      const dx = e.clientX - currentX;
      const dy = e.clientY - currentY;

      element.style.width = initialWidth + dx + "px";
      element.style.height = initialHeight + dy + "px";
    }
  });

  document.addEventListener("mouseup", function () {
    isResizing = false;
  });
}


document.addEventListener("DOMContentLoaded", function () {
  const editorState = {
    undoStack: [],
    redoStack: [],
  };

  function saveState() {
    const textArea = document.getElementById("text-area-container");
    const currentState = textArea.innerHTML;
    editorState.undoStack.push(currentState);
    updateUndoRedoButtons();
  }

  function updateUndoRedoButtons() {
    const undoButton = document.getElementById("undo");
    const redoButton = document.getElementById("redo");

    undoButton.disabled = editorState.undoStack.length === 0;
    redoButton.disabled = editorState.redoStack.length === 0;
  }

  function undo() {
    if (editorState.undoStack.length > 0) {
      const currentState = document.getElementById("text-area-container").innerHTML;
      editorState.redoStack.push(currentState);

      const prevState = editorState.undoStack.pop();
      document.getElementById("text-area-container").innerHTML = prevState;

      updateUndoRedoButtons();
    }
  }

  function redo() {
    if (editorState.redoStack.length > 0) {
      const currentState = document.getElementById("text-area-container").innerHTML;
      editorState.undoStack.push(currentState);

      const nextState = editorState.redoStack.pop();
      document.getElementById("text-area-container").innerHTML = nextState;

      updateUndoRedoButtons();
    }
  }

  document.getElementById("addText").addEventListener("click", function () {
    let textArea1 = document.createElement("div");
    textArea1.contentEditable = true;
    textArea1.classList.add("draggable");

    document.getElementById("text-area-container").appendChild(textArea1);

    saveState();
  });

  document.getElementById("undo").addEventListener("click", undo);

  document.getElementById("redo").addEventListener("click", redo);

  document.getElementById("text-area-container").addEventListener("input", function () {
    saveState();
  });
});






