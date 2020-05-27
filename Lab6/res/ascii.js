let chkBoxTurbo = document.getElementById("chkTurbo");
let cboAnimation = document.getElementById("cboAnimation");
let cboSize = document.getElementById("cboSize");
let btnStop = document.getElementById("btnStop");
let btnStart = document.getElementById("btnStart");
let drawingTextArea = document.getElementById("drawingArea");
let selectedAnimation = '';
let selectedSize = '';



function onBtnStart()
{
    alert("Start Clicked...");
}

function onBtnEnd()
{
    alert("End Clicked...");
}

function onTurboClick()
{
    if (chkBoxTurbo.checked == true) {
        alert("Turbo Clicked")
    }
}

function onAnimationClick()
{
    selectedAnimation = cboAnimation.options[cboAnimation.selectedIndex].value;
    alert(selectedAnimation);
}

function onSizeClick()
{
    selectedSize = cboSize.options[cboSize.selectedIndex].value;
    alert(selectedSize);
}

