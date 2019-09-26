class BankAccount {
    constructor() {
        // your code here
        // this.firstName = firstName;
        // this.lastName = lastName;
        // this.amount = amount;
        // this.account_no = account_no;
        // this.account_bal = account_bal;
    }

    getBalance(account_dets) {
        // your code here
       
        // var bal = account_dets.pop(account_bal);
        // console.log(bal);
        // console.log(account_dets.pop(account_bal));

    }

    open(firstName, lastName, birthyear, currentMonth, bestyear) {
        // your code here
        this.firstName = firstName;
        this.lastName = lastName;
        this.bestyear = bestyear;
        this.birthyear = birthyear;
        this.currentMonth = currentMonth;
        var acc_name = lastName +' '+ firstName;
        var account_no = bestyear+currentMonth+lastName+bestyear+birthyear+bestyear;
        console.log("Thank you for choosing SN bank.\n Here are your account details")
        console.log("Account Name : "+ acc_name +"  Account Number : "+account_no);
        // account_dets.push(firstName, lastName, acc_name, account_no);
        // console.log(account_dets);
    }
        
    deposit(account_no, amount, account_bal) {
        // your code here
        this.amount = amount;
        this.account_no = account_no;
        this.account_bal = account_bal;
        if(account_no == '1965Cohen196219941962')
        {
            account_bal = account_bal + amount;
            //console.log("Deposit of "+ amount + " successful. Use the check balance option to know your current balance.");
            console.log("Deposit of "+ amount + " successful. Your current balance is " + account_bal);
            // account_dets.push(account_bal);
            // console.log(account_dets);
        }
        else
        {
            console.log("Sorry this isn,t your intended account")
        }
    }
    
    withdraw(account_no, amount, account_bal) {
        // your code here
        this.amount = amount;
        this.account_no = account_no;
        this.account_bal = account_bal;
        if(account_no == '1965Cohen196219941962')
        {
            account_bal = account_bal - amount;
            //console.log("Withdraw of "+ amount + " successful. Use the check balance option to know your current balance.");
            console.log("Withdraw of "+ amount + " successful. Your current balance is " + account_bal);
            // account_dets.push(account_bal);
            // console.log(account_dets);
        }
        else
        {
            console.log("Are you really the owner of this account?")
        }
    }

    close(){

    }

    


}
//var account_dets = [];


// Rachel = new BankAccount;
// Rachel.open('Rachel', 'Mulin', 1997, 09, 2016);

 Dave = new BankAccount;
 Dave.open('Dave', 'Cohen', 1994, 03, 1962);
Dave.deposit('1965Cohen196219941962', 50000, 380000);
Dave.withdraw('1965Cohen196219941962', 50000, 430000)
//Dave.deposit('2025Mulin201619972016', 50000);
//Dave.getBalance();

