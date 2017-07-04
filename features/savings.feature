Feature: Check Savings
  In order to compare savings accounts
  I need to start comparison for different categories

  Scenario: Compare savings accounts for different categories
    Given I am on savings page
    And I click on start comparison for "abc"
    Then I should get the list of results
    And click on "APPLY NOW" button should take me to the provider
