const openThird = () => {
    document.getElementById("third").showModal();
}

const closeThird = () => {
    document.getElementById("third").close();
}

const openFourth = () => {
    document.getElementById("fourth").show();
}

const closeFourth = () => {
    document.getElementById("fourth").close();
}

const interact = () => {
    if (document.getElementById("body").style.backgroundColor === "green") {
        document.getElementById("body").style.backgroundColor = "white";
    } else {
        document.getElementById("body").style.backgroundColor = "green";
    }
}

const zIndexReveal = () => {
    document.getElementById("zIndex").style.visibility === "visible" ? document.getElementById("zIndex").style.visibility = "hidden" : document.getElementById("zIndex").style.visibility = "visible";
}

const clickElement = (elmnt) => {
    let clicks = 0;
    elmnt.onclick = mouseClick;

    function mouseClick() {
        clicks++;
        elmnt.innerHTML = `clicked : ${clicks}`;
    }
}

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

dragElement(document.getElementById("first"));
dragElement(document.getElementById("second"));
clickElement(document.getElementById("zIndex"));