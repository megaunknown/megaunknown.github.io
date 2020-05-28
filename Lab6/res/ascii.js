const chkBoxTurbo = document.getElementById("chkTurbo");
const cboAnimation = document.getElementById("cboAnimation");
const cboSize = document.getElementById("cboSize");
const btnStop = document.getElementById("btnStop");
const btnStart = document.getElementById("btnStart");
const drawingTextArea = document.getElementById("drawingArea");
let selectedAnimation = '';
let selectedSize = '';


/**
 * Get Animations Frames
 * 
 */
function getFrames(arr) {
    let newArray = arr.split("=====\n");
    return newArray;
}

/**
 * On Click Start Button
 */
function onBtnStart() {
    drawingTextArea.value = "";

    selectedAnimation = cboAnimation.options[cboAnimation.selectedIndex].value;
    if (selectedAnimation == "Blank") {
        drawingTextArea.value = "";
    }
    else {
        changeStatus(true);
    }
}

/**
 * On Click End Button
 */
function onBtnEnd() {
    changeStatus(false);
    //Clear the Text Are
    drawingTextArea.value = "";
}

/**
 * On Turbo Checkbox Click
 */
function onTurboClick() {
    if (chkBoxTurbo.checked == true) {
        alert("Turbo Clicked")
    }
}

/**
 * When the User Select 
 */
function onAnimationClick() {
    selectedAnimation = cboAnimation.options[cboAnimation.selectedIndex].value;
    let frams = [];

    if (selectedAnimation == "Blank" || selectedAnimation == "Custom") {
        drawingTextArea.value = "";
    }
    else if (selectedAnimation == "Excercise") {
        drawingTextArea.value = EXERCISE;
        frams = getFrames(EXERCISE);
    }
    else if (selectedAnimation == "Juggler") {
        drawingTextArea.value = JUGGLER;
        frams = getFrames(JUGGLER);
    }
    else if (selectedAnimation == "Bike") {
        drawingTextArea.value = BIKE;
        frams = getFrames(BIKE);
    }
    else if (selectedAnimation == "Dive") {
        drawingTextArea.value = DIVE;
        frams = getFrames(DIVE);
    }
}

/**
 * Change the Size of the TextArea
 */
function onSizeClick() {
    selectedSize = cboSize.options[cboSize.selectedIndex].value;
    let fontSize = '' ;
    if(selectedSize == "Tiny")
    {
        fontSize = '7pt';
    }
    else if( selectedSize == "Small")
    {
        fontSize = '10pt';
    }
    else if(selectedSize == "Medium")
    {
        fontSize = '12pt';
    }
    else if(selectedSize == "Large")
    {
        fontSize = '16pt';
    }
    else if(selectedSize == "Extra Large")
    {
        fontSize = '24pt';
    }
    else if(selectedSize == "XXL")
    {
        fontSize = '32pt';
    }
    drawingTextArea.style.fontSize = fontSize;
}


/**
 * Change the Status of Controls
 * Disable/Enable based on status 
 */
function changeStatus(status) {
    btnStart.disabled = status;
    cboAnimation.disabled = status;
    btnStop.disabled = !status;
}
