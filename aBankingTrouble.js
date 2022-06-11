/*
You are making an online banking product, which can be used by thirdparty software (such as desktop or browser clients) to process financial operations. Your external API has an Account class to symbolize user accounts, and it looks as follows:

function Account(name) {
    this.owner = name;
}

Account.prototype.deposit = function (amount) {
    return 'Deposited ' + amount + '$ to ' + this.owner + '\'s account';
}
Your product also utilizes an external gateway to securely process operations, and all was going well - until today. A hail of calls from the people whose money did not reach their accounts had hit your tech support. You contacted the gateway immediately, and they confirmed that there was a hackers' attack, but they still can't manage to cope with it. Finally, you've convinced them to send you a piece of gateway's own code - in hope that you can find and compensate its weak points.

What you received was:

var Gateway = function () {
  //...
  // proprietary code
  //...
}

Gateway.prototype.doOperation = function (amount, operation) {
  //...
  // proprietary journaling code
  //...
  return operation(amount);
}
Not much (or nearly as secure, as a gateway code should have been) - but you have to play the hand you are dealt.

So now you have

a piece of gateway that you cannot modify
an external API, which can be updated - but it will take days for all thirdparty clients to switch to the new version
your own code on your own servers which you contol and can change and deploy very fast
And that leaves you with only one option - your task is to protect your transactions from the hacker by modifying only your own code.
*/

function makeOp(opName) {
  return function (account, amount) {
    return this.gateway.doOperation(amount, account[opName].bind(account));
  }
}

function OnlineBank() {
  this.gateway = new Gateway();
}

OnlineBank.prototype.deposit = makeOp('deposit');
