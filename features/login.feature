Feature: Example feature for Web UI automation

  Background:
    Given I open the homepage

  @smoke @regression
  Scenario Outline: Test login functionality
    When I login with "<username>" and "<password>"
    Then I should see the user profile page

    Examples:
      | username  | password  |
      | user1     | pass1     |
      | user2     | pass2     |
