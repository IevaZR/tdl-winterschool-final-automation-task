Feature: Search
# TODO add search which returns also hidden descriptions -> possible to search by color
# TODO search returns incorrect results also when conducting manual testing

  @searchByProductName
  Scenario: Search returns correct results - product names
    Given I am on the home page
    When I enter <searchQuery> in the search field
    And I click on search icon
    Then I get only results with product names containing search query

    Examples: 
      | searchQuery     |
      | "Blouse"        |
      | "blouse"        |
      | "shirt"         |
      | "dress"         |
      | "printed dress" |
      | "white"         |

  @searchByProductNameAndColor
  Scenario: Search returns correct results - product names and colors
    Given I am on the home page
    When I enter <searchQuery> in the search field
    And I click on search icon
    Then I get only results with product names and product colors containing search query

    Examples: 
      | searchQuery     |
      | "Blouse"        |
      | "blouse"        |
      | "shirt"         |
      | "dress"         |
      | "printed dress" |
      | "white"         |
      | "purple"        |
