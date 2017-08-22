//business logic
var balance = 0;

function BankAccount (inputName, initialDeposit, balance, inputDeposit, inputWithdrawal) {
  this.inputName = inputName;
  this.initialDeposit = initialDeposit;
  this.userBalance = balance;
  this.userDeposit = inputDeposit;
  this.userWithdrawal = inputWithdrawal;
}

BankAccount.prototype.addDeposit = function () {
  return this.userBalance += this.userDeposit;
}
BankAccount.prototype.subtractWithdrawal = function () {
  return this.userBalance -= this.userWithdrawal;
}

var resetFields = function () {
  $("input#inputDeposit").val("");
  $("input#inputWithdrawal").val("");
}


//Frontend Logic
$(document).ready(function(){
  $("#newAccount").submit(function(event){
    event.preventDefault();

    var inputName = $("input#inputName").val();

    var initialDeposit = parseInt($("input#initialDeposit").val());
    var balance = initialDeposit;
    var userInfo = new BankAccount(inputName, initialDeposit, balance);
    userInfo.addDeposit();

    $(".hideThisShit").fadeIn(1000);

    // $("div.visible").toggleClass("hideThisShit");
    $("#balance").text("$" + balance.toFixed(2));

    $("#inputNameFinal").text(inputName);   //----- changed this
    // console.log(inputName)
    $("form#newAccount").trigger("reset");

    $("form.depAm").submit(function(event){
      event.preventDefault();

      var userDeposit = parseInt($("#inputDeposit").val());
      newBalance = (balance + userDeposit)

      console.log(newBalance);

      $("#balance").text("$" + balance.toFixed(2));
      $("form.depAm").trigger('reset');

    });
    resetFields();

    $("form.witAm").submit(function(event){
      event.preventDefault();

      var userWithdrawal = parseInt($("input.inputWithdrawal").val());
      userInfo.userWithdrawal = userWithdrawal;
      userInfo.subtractWithdrawal();


      $("#balance").text("$" + balance.toFixed(2));
      $("form.witAm").trigger('reset');

    });
    resetFields();

  });
});
