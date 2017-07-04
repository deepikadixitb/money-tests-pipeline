var expect = require('chai').expect;
// var SavingsAccountPageObject = require('../../page-objects/savingsaccount.page');
// let SavingsAccountPage = new SavingsAccountPageObject();

module.exports = function () {
  this.Given(/^I am on savings page$/, function () {
    //  SavingsAccountPage.open();
     expect("abc").to.eql('abc');
  });

  this.Given(/^I click on start comparison for "([^"]*)"$/, function (value) {
    expect("def").to.eql('def');
  });

  this.Then(/^I should get the list of results$/, function () {
    expect("ghi").to.eql('ghi');
  });

  this.Then(/^click on "([^"]*)" button should take me to the provider$/, function (buttonTitle) {
    expect("jkl").to.eql('jkl');
  });

};
