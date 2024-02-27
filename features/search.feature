@search
Feature: Search

  @searchByProductName
  Scenario: Search returns correct results - product names
    Given I am on the home page
    When I enter <searchQuery> in the search field
    And I click on search icon
    Then I get only results with product names containing <searchQuery>

    Examples: 
      | searchQuery     |
      | "Blouse"        |
      | "blouse"        |
      | "shirt"         |
      | "dress"         |
      | "printed dress" |
      | "white"         |
      | "blUE"          |

  @searchByProductNameAndColor
  Scenario: Search returns correct results - product names and colors
    Given I am on the home page
    When I enter <searchQuery> in the search field
    And I click on search icon
    Then I get only results with product names and product colors containing <searchQuery>

    Examples: 
      | searchQuery     |
      | "Blouse"        |
      | "blouse"        |
      | "shirt"         |
      | "dress"         |
      | "printed dress" |
      | "white"         |
      | "purple"        |
      | "blUE"          |
