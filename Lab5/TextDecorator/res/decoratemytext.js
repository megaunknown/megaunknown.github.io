/** 
    Change the Font of TextArea
*/
function changeTextDecoration() {
    const textAreaInput = document.getElementById("textDecoration");
    /*
    https://stackoverflow.com/questions/15195209/how-to-get-font-size-in-html
    */
    const style = window.getComputedStyle(textAreaInput).fontSize;
    var currentFontSize = parseFloat(style);
    currentFontSize += 2;
    textAreaInput.style.fontSize = currentFontSize + "pt";
}

/** 
 * Call changeTextDecoration every 500 ms
 * 
*/
function timerFun() {
    setInterval(changeTextDecoration, 500);
}

/**
 * CheckBox function to change the styling 
 * of the TextArea..
 */
function addStyling() {
    const checkBox = document.getElementById("chk");
    var textAreaInput = document.getElementById("textDecoration");

    if (checkBox.checked == true) {
        textAreaInput.style.fontWeight = "bold";
        textAreaInput.style.color = "green";
        textAreaInput.style.textDecoration = "underline";
    }
    else {
        textAreaInput.style.fontWeight = "normal";
        textAreaInput.style.color = "black";
        textAreaInput.style.textDecoration = "none";
    }
}

/**
 * Alert Funcion
 */
function alertFun() {
    alert("Hello, world!");
}