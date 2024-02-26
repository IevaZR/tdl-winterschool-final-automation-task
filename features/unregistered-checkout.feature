Feature: Unregistered user checkout
#TODO should I also check the steps inbetween?

  Scenario: Page asks to login or create an account before letting unregistered user finish the order
    Given I am on the home page
    And I have not logged in
    When I click on 'Women' menu item
    And I click on the first product
    # And I select the size and color
    # And I click on 'Add to cart'
    # And I click on 'Proceed to checkout'
    # And I click on 'Proceed to checkout' again
    # Then I am asked to create an account or sign in
    # And I am not able to finish order without creating account or logging in
