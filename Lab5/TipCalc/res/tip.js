function calcTip() {

	let subtotalElem = document.getElementById("subtotal");
    let tipElem      = document.getElementById("tip");
    let totalElem    = document.getElementById("total");

    let subtotalVal = subtotalElem.value;
    let tipVal      = tipElem.value;


    let total = parseFloat(subtotalVal) + (parseFloat(tipVal/100) * subtotalVal);
    

    totalElem.innerHTML = '$' + total;
}
