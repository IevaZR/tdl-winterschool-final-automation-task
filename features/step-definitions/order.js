import { Given, When, Then } from "@wdio/cucumber-framework";
import productsPage from "../page-objects/products.page.js";
import productPage from "../page-objects/product.page.js";
import productAddedPopupPage from "../page-objects/product-added-popup.page.js";
import shoppingCartSummaryPage from "../page-objects/shopping-cart-summary.page.js";
import authenticationPage from "../page-objects/authentication.page.js";
import homePage from "../page-objects/home.page.js";
import menuPage from "../page-objects/menu.page.js";
import cartDropdownPage from "../page-objects/cart-dropdown.page.js";

When("I click on the first product", async function () {
    await browser.debug();
    // REVIEW: This selector didn't work for me
    // await productsPage.firstProductLink.click()
});

When("I select a size that is in stock", async function () {
    await productPage.sizeFieldDropDown.click()
    await productPage.getAvailableSize()
})

When("I click on 'Add to cart'", async function () {
    await productPage.addToCartBtn.click()
})

When("I click on 'Proceed to checkout'", async function () {
    await productAddedPopupPage.proceedToCheckoutBtn.waitForClickable()
    await productAddedPopupPage.proceedToCheckoutBtn.click()
})

When("I click on 'Proceed to checkout' again", async function () {
    await shoppingCartSummaryPage.proceedToCheckoutBtn.click()
    await browser.pause(5000)
})

Then("I am asked to create an account or sign in", async function () {
    const expectedCreateAccountText = 'Create an account'
    const receivedCreateAccountText = await authenticationPage.createAnAccountHeading.getText()
    expect(receivedCreateAccountText.toLowerCase()).toBe(expectedCreateAccountText.toLowerCase())

    const expectedLoginText = 'Already registered?'
    const receivedLoginText = await authenticationPage.logInHeading.getText()
    expect(receivedLoginText.toLowerCase()).toBe(expectedLoginText.toLowerCase())

    await expect(authenticationPage.createAnAccountBtn).toBeDisplayed()
    await expect(authenticationPage.submitLoginBtn).toBeDisplayed()
})

Then("I am not able to finish order without creating account or logging in", async function () {
    const orderSteps = await authenticationPage.orderSteps
    for (let i = 2; i < orderSteps.length; i++) {
        const listItem = orderSteps[i]
        const link = await listItem.$('a')
        await expect(link).not.toExist()
    }
})

Given("There are no products in the Cart", async function () {
    expect(homePage.cartElementQuantity).not.toBeDisplayed()
})

Then("The product counter on Cart increases by one", async function () {
    await homePage.cartElementQuantity.waitForDisplayed()
    const numberOfProducts = await homePage.cartElementQuantity.getText()
    expect(numberOfProducts).toBe('1')
})

Given("There is one product in the Cart", async function () {
    await browser.debug();
    // REVIEW: This needs some more work to make it more stable
    // This could have been accomplished with a much simpler approach of validating text of one element

    // let noItemsInCart = false;

    // try {
    //     await expect(homePage.cartElementQuantity).not.toBeDisplayed();
    //     noItemsInCart = true;
    // } catch (error) { }

    // if (noItemsInCart) {
    //     const menuItemToClick = await menuPage.selectMenuItem("Women")
    //     await menuItemToClick.click()
    //     await productsPage.firstProductLink.click()
    //     await productPage.sizeFieldDropDown.click()
    //     await productPage.getAvailableSize()
    //     await productPage.addToCartBtn.click()
    //     await productAddedPopupPage.closePopupBtn.waitForDisplayed()
    //     await productAddedPopupPage.closePopupBtn.click()
    // }
    // await homePage.cartElementQuantity.waitForDisplayed()
    // const numberOfProducts = await homePage.cartElementQuantity.getText()
    // expect(numberOfProducts).toBe('1')
})

When("I click on the Cart icon", async function () {
    await homePage.cartElement.moveTo()
})

When("I click on the 'x' to remove the items from Cart", async function () {
    const productRemoveButton = await cartDropdownPage.productRemoveBtn
    if (productRemoveButton) {
        await productRemoveButton.click()
    } else {
        return true
    }
})

Then("There are no products left in the cart", async function () {
    expect(homePage.cartElementQuantity).not.toBeDisplayed()
})