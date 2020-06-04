init = function () {
    var puzzleArea = document.getElementById('puzzlearea');
    var divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (var i = 0; i < divs.length; i++) {
        var div = divs[i];

        // calculate x and y for this piece
        var x = ((i % 4) * 100);
        var y = (Math.floor(i / 4) * 100);

        // set basic style and background
        div.className = "puzzlepiece";
        div.style.left = x + 'px';
        div.style.top = y + 'px';
        div.style.backgroundImage = 'url("background.jpg")';
        div.style.backgroundPosition = -x + 'px ' + (-y) + 'px';

        // store x and y for later
        div.x = x;
        div.y = y;
    }

    $("#shufflebutton").click(function () {
        alert("Shuffle...");
    })


    $("#puzzlearea").children().click(function () {
        alert(this.innerText);
        let nextDivToCurrent = $(this).next();

        if (nextDivToCurrent.text() == 'X') {
            let currentDivTxt = $(this).text();
            let nextDivTxt = $(this).next().text();
        //    alert("Before swapping" + currentDivTxt + ' ' + nextDivTxt);
            $(this).text(nextDivTxt);
            $(this).next().text(currentDivTxt);
        //    alert("After " + currentDivTxt + ' ' + nextDivTxt);
           
        }
    });

    /*
        MouseOver 
    */
    $("#puzzlearea").children().mouseover(function () {
        let nextDivToCurrent = $(this).next();
        if (nextDivToCurrent.text() == 'X') {
            $(this).addClass("movablepiece");
        }
        else {
            $(this).removeClass("movablepiece");
        }
    });

    /*
    .click(function(){
        alert(this.innerText);
        alert("check next " + this.next().text("dd"));
        //if()
    })
    */
    /*
        $("#puzzlearea").children().click(function(){
            alert(this.innerText);
        })
    */
    $("#checkbutton").click(function () {
        if (checkSolution($("#puzzlearea").children()) == true) {
            alert("True");
        }
        else {
            alert("false");
        }
    });

    function checkAround(element) {

    }
    function checkSolution(list) {
        for (let i = 1; i <= 15; i++) {
            if (list[i - 1].innerText == i.toString(10)) {
                return false;
            }
        }
        return true;
    }
};
init();






