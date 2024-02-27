@order
Feature: Order

  @addCartItem
  Scenario: Correct number of items in Cart displayed when adding product to Cart
    Given I am on the home page
    And There are no products in the Cart
    When I click on 'Women' menu item
    When I click on the first product
    When I select a size that is in stock
    And I click on 'Add to cart'
    Then The product counter on Cart increases by one

  @removeCartItem
  Scenario: Correct number of items in Cart displayed when removing product from Cart
    Given I am on the home page
    And There is one product in the Cart
    And I click on the Cart icon
    And I click on the 'x' to remove the items from Cart
    Then There are no products left in the cart
