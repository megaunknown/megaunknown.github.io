
function changeTextDecoration()
{
    var textAreaInput = document.getElementById("textDecoration");
    textAreaInput.style.fontSize = "24pt";
}
function addStyling()
{
    var checkBox = document.getElementById("chk");
    var textAreaInput = document.getElementById("textDecoration");
    
    if(checkBox.checked == true)
    {
        textAreaInput.style.fontWeight = "bold";
        textAreaInput.style.color = "green";
        textAreaInput.style.textDecoration = "underline";
    }
    else
    {
        textAreaInput.style.fontWeight = "normal";
        textAreaInput.style.color = "black";
        textAreaInput.style.textDecoration = "none";
    }
        
}

function alertFun()
{
    alert("Hello, world!");
}