const chkBoxTurbo = document.getElementById("chkTurbo");
const cboAnimation = document.getElementById("cboAnimation");
const cboSize = document.getElementById("cboSize");
const btnStop = document.getElementById("btnStop");
const btnStart = document.getElementById("btnStart");
const drawingTextArea = document.getElementById("drawingArea");

let selectedAnimation = '';
let selectedSize = '';
let frams = [];
let timerId = 0;
let iNumberOfFrames  = 0;
let iCurrentFrameIndex  = 0;
let timerInterval = 500;


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
        startAnimation();
    }
}

/**
 * 
 */
function startAnimation()
{
     iNumberOfFrames = frams.length;
     iCurrentFrameIndex = 0;

     timerId = setInterval(loop,timerInterval)
}

function loop()
{
    if(iCurrentFrameIndex >= iNumberOfFrames)
        iCurrentFrameIndex = 0;

    drawingTextArea.value = frams[iCurrentFrameIndex];
    iCurrentFrameIndex++;
}

/**
 * On Click End Button
 */
function onBtnStop() {
    changeStatus(false);
    //Clear the Text Are
    drawingTextArea.value = "";

    clearTimeout(timerId);
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
    drawingTextArea.style.fontSize = selectedSize;
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
