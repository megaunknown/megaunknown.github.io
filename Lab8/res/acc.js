"use strict";
const Module=(
    function()
    {
        let accountInfoList = [];
        let txtArea, btnCreateNewAccount,txtAccountName, txtDeposit;
 
        class Account{
            constructor(_accName,_accDeposit)
            {
                this.accName = _accName ;
                this.accDeposit = _accDeposit; 
            }

            getName(){
                return this.accName;
            }

            getDeposit(){
                return this.accDeposit;
            }
        }

        
        let makeAccount = function() {
            txtAccountName =  document.getElementById('txtAccountName');
            txtDeposit =  document.getElementById('txtDeposit');
            function addNewAccount() {
                let cls = new  Account(txtAccountName.value,txtDeposit.value);
                return cls;
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
               strText += 'Account name: ' + obj.getName() + '\t' + 'Balance: ' + obj.getDeposit() + '\n'; 
            }
            // view the objects on the textarea.
            txtArea.value = strText;
        }

    }
)();
