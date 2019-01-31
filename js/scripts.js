//back end
function BankAccount(name, firstDeposit) {
  this.name = name,
  this.firstDeposit = firstDeposit,
  this.balance = firstDeposit
}

BankAccount.prototype.deposit = function(depositAmount) {
  this.balance += depositAmount
}

BankAccount.prototype.withdrawal = function(withdrawalAmount) {
  this.balance -= withdrawalAmount
}


//front end
var bankAccount = new BankAccount();

$(document).ready(function() {
  $("form#bankInputs").submit(function(event) {
    event.preventDefault();
    var inputAccountName = $("input#accountName").val();
    var inputFirstDeposit = parseInt($("input#initialDeposit").val());
    $("input#submitButton").attr("disabled", "disabled")
    var myBankAccount = new BankAccount(inputAccountName, inputFirstDeposit);
    console.log(myBankAccount.balance);
    $("#balanceDisplay").html(myBankAccount.balance)
    $("#depositButton").click(function()  {
      var deposit = parseInt($("input#deposit").val());
      myBankAccount.deposit(deposit)
      console.log(myBankAccount.balance);
      $("#balanceDisplay").html(myBankAccount.balance)
    })
    $("#withdrawButton").click(function() {
      var withdrawal = parseInt($("input#withdrawal").val());
      myBankAccount.withdrawal(withdrawal)
      console.log(myBankAccount.balance);
      $("#balanceDisplay").html(myBankAccount.balance)
    })

  });
});
