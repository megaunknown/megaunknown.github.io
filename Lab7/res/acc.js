"use strict";

var makeCounter = function() {
    let txtAccountName, txtDeposit, btnCreateNewAccount, txtArea;
    txtAccountName =  this.document.getElementById('txtAccountName');
    txtDeposit =  this.document.getElementById('txtDeposit');
    btnCreateNewAccount =  this.document.getElementById('btnCreateNewAccount');
    txtArea  =  this.document.getElementById('txtArea');
    btnCreateNewAccount.onclick = this.onButtonAddClick;

    function addNewAccount(val) 
    { 
        let strText = txtArea.value;
        strText += val ; 
        txtArea.value = strText;
        txtAccountName.value = '';
        txtDeposit.value = ''; 
    }

    return { 
        addAccount: function() { 
            addNewAccount(txtAccountName.value + "\t " + txtDeposit.value + '\n'); 
        }
    }
};