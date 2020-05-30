"use strict";
let accountInfoList =[];
let txtArea, btnCreateNewAccount,txtAccountName, txtDeposit;; 

let makeAccount = function() {
    txtAccountName =  document.getElementById('txtAccountName');
    txtDeposit =  document.getElementById('txtDeposit');
    function addNewAccount() 
    {
    //    alert(`addNewAccount method called...account :: ${txtAccountName.value} balance ::  ${txtDeposit.value}`);
        return {
            accountName:txtAccountName.value,
            balance:txtDeposit.value
        };
    }

    return { 
        addAccount: addNewAccount
    };
}

window.onload =  function(){
    btnCreateNewAccount =  this.document.getElementById('btnCreateNewAccount');
    txtArea  =  document.getElementById('txtArea');
    btnCreateNewAccount.onclick = onButtonAddClick;
}

function onButtonAddClick()
{
    //Clear the text
    txtArea.value = '';
    let acc = new makeAccount();
    //get the object
    var data = acc.addAccount();
    //push the object to the array
    accountInfoList.push(data);

    let strText = txtArea.value;
    //traverse through the array and add them to the text.
    for (const obj of accountInfoList) {
       strText += 'Account name: ' + obj.accountName + '\t' + 'Balance: ' + obj.balance + '\n'; 
    }
    // view the objects on the textarea.
    txtArea.value = strText;
}