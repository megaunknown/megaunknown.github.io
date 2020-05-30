"use strict";

let makeAccount = function() {
    let txtAccountName, txtDeposit, txtArea;
    txtAccountName =  document.getElementById('txtAccountName');
    txtDeposit =  document.getElementById('txtDeposit');
    txtArea  =  document.getElementById('txtArea');

    function addNewAccount(acc,amount) 
    {
        let strText = txtArea.value;
        strText += 'Account name: ' + acc + '\t' + 'Balance: ' + amount + '\n'; 
        txtArea.value = strText;
        //clear the text
        txtAccountName.value = '';
        txtDeposit.value = ''; 
    }

    return { 
        addAccount: function() { 
            addNewAccount(txtAccountName.value,txtDeposit.value); 
        }
    }
};

window.onload =  function(){
    let btnCreateNewAccount; 
    btnCreateNewAccount =  this.document.getElementById('btnCreateNewAccount');
    btnCreateNewAccount.onclick = onButtonAddClick;
}

function onButtonAddClick()
{
    var acc = makeAccount();
    acc.addAccount(); 
}