init = function () {

    let puzzleArea = document.getElementById('puzzlearea');
    let divs = puzzleArea.getElementsByTagName("div");

    // initialize each piece
    for (let i = 0; i < divs.length; i++) {
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

    /*
        Shuffle Button Click Event
    */
    $("#shufflebutton").click(function () {
        let arr = shuffle();
        $("#puzzlearea > div").each(function (index, element) {
            $(this).text(arr[index]);
        });
    })


    /*
        MouseClick Event
    */
    $("#puzzlearea").children().click(function () {
        //    alert(this.innerText);
        let nextDivToCurrent = $(this).next();
        if (nextDivToCurrent.text() == 'X') {
            let currentDivTxt = $(this).text();
            let nextDivTxt = $(this).next().text();
            //    alert("Before swapping" + currentDivTxt + ' ' + nextDivTxt);
            $(this).text(nextDivTxt);
            $(this).next().text(currentDivTxt);
            //    alert("After " + currentDivTxt + ' ' + nextDivTxt);    
        }

        if(checkSolution($("#puzzlearea").children()) == true){
            alert("You solved the puzzle.");
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
        Check user solution.
    */
    function checkSolution(list) {
        for (let i = 1; i <= 15; i++) {
            if (list[i - 1].innerText == i.toString(10)) {
                return false;
            }
        }
        return true;
    }

    /*
        Generate Shuffled Array.
    */
    function shuffle() {
        let arr = [], n1;
        //pick two random numbers from 1-15
        while (arr.length != 15) {
            n1 = Math.floor(Math.random() * 15) + 1;
            if (arr.indexOf(n1) == -1)
                arr.push(n1);
        }
        /*
        Place BLANK Tile
        */
        n1 = Math.floor(Math.random() * 15) + 1;
        arr.push('X');//15
        let tmp = arr[n1];
        arr[n1] = 'X';
        arr[15] = tmp;

        return arr;
    }
};
init();









