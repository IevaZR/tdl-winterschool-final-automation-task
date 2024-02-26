Feature: Order

@cartItems
Scenario: Correct number of items in Cart displayed
Given I am on the home page
And There are no products in the Cart
When I click on 'Women' menu item
When I click on the first product
When I select a size that is in stock
And I click on 'Add to cart'
Then The product counter on Cart increases by one