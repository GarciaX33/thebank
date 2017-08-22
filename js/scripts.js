//business logic
var balance = 0;

function BankAccount (inputName, initialDeposit, balance, inputDeposit, inputWithdrawal) {
  this.inputName = inputName;
  this.initialDeposit = initialDeposit;
  this.userBalance = balance;
  this.userDeposit = inputDeposit;
  this.userWithdrawal = inputWithdrawal;
}

BankAccount.prototype.addDeposit = function (deposit) {
  return this.userBalance += deposit;
}
BankAccount.prototype.subtractWithdrawal = function (withdrawal) {
  return this.userBalance -= withdrawal;
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
    // userInfo.addDeposit();

    $(".hideThisShit").fadeIn(1000);

    // $("div.visible").toggleClass("hideThisShit");
    $("#balance").text("$" + userInfo.userBalance);

    $("#inputNameFinal").text(inputName);   //----- changed this
    // console.log(inputName)
    $("form#newAccount").trigger("reset");

    $("form.depAm").submit(function(event){
      event.preventDefault();

      var userDeposit = parseInt($("#inputDeposit").val());

      $("#balance").text("$" + userInfo.userBalance);
      $("form.depAm").trigger('reset');
    });

    $("form.witAm").submit(function(event){
      event.preventDefault();

      var userWithdrawal = parseInt($("#inputWithdrawal").val());
      userInfo.subtractWithdrawal(userWithdrawal);

      $("#balance").text("$" + userInfo.userBalance);
      $("form.witAm").trigger('reset');
    });

  });
});
