"use strict";
let chkBoxTurbo, cboAnimation, cboSize, btnStop, btnStart, drawingTextArea, selectedAnimation, selectedSize;
let frams = [], timerId = 0, iNumberOfFrames = 0, iCurrentFrameIndex = 0, timerInterval = 250;

//Applying Unobtrusive JavaScript
window.onload = function() {
    chkBoxTurbo = document.getElementById("chkTurbo");
    cboAnimation = document.getElementById("cboAnimation");
    cboSize = document.getElementById("cboSize");
    btnStop = document.getElementById("btnStop");
    btnStart = document.getElementById("btnStart");
    drawingTextArea = document.getElementById("drawingArea");

    btnStart.onclick = onBtnStart;
    btnStop.onclick = onBtnStop;
    cboAnimation.onchange = onAnimationClick;
    cboSize.onchange = onSizeClick;
    chkBoxTurbo.onchange = onTurboClick;
};

/* Get Animations Frames*/
function getFrames(arr) {
    return arr.split("=====\n");
}

/* On Click Start Button */
function onBtnStart() {
    selectedAnimation = cboAnimation.options[cboAnimation.selectedIndex].value;
    if (selectedAnimation == "Blank") {
        drawingTextArea.value = "";
    }
    else {
        changeStatus(true);
        startAnimation();
    }
}

function startAnimation() {
    iNumberOfFrames = frams.length;
    iCurrentFrameIndex = 0;
    timerId = setInterval(loop, timerInterval)
}

function loop() {
    if (iCurrentFrameIndex >= iNumberOfFrames)
        iCurrentFrameIndex = 0;

    drawingTextArea.value = frams[iCurrentFrameIndex];
    iCurrentFrameIndex++;
}

/* On Click End Button */
function onBtnStop() {
    changeStatus(false);
    clearTimeout(timerId);
}

/* On Turbo Checkbox Click */
function onTurboClick() {
    if (btnStart.disabled == true) {
        if (chkBoxTurbo.checked == true) {
            timerInterval = 50;
        }
        else {
            timerInterval = 250;
        }
        clearTimeout(timerId);
        timerId = setInterval(loop, timerInterval);
    }
}

/* When the User Select  */
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

/* Change the Size of the TextArea */
function onSizeClick() {
    selectedSize = cboSize.options[cboSize.selectedIndex].value;
    drawingTextArea.style.fontSize = selectedSize;
}

/* Change the Status of Controls ( Disable/Enable based on status)  */
function changeStatus(status) {
    btnStart.disabled = status;
    cboAnimation.disabled = status;
    btnStop.disabled = !status;
}
