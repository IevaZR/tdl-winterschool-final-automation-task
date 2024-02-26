Feature: Search
# TODO add search which returns also hidden descriptions -> possible to search by color
# TODO search returns incorrect results also when conducting manual testing

  @search
  Scenario: Search box returns correct results
    Given I am on the home page
    When I enter <searchQuery> in the search field
    And I click on search icon
    Then I get only results containing search query

    Examples: 
      | searchQuery     |
      | "Blouse"        |
      | "blouse"        |
      | "shirt"         |
      | "dress"         |
      | "printed dress" |
      | "white"         |
