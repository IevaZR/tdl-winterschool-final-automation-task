import { Given, When } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";
import menuPage from "../page-objects/menu.page.js";

Given('I am on the home page', async function() {
    await homePage.open()
    await homePage.logoELement.waitForDisplayed()
})

Given('I have not logged in', async function() {
    await expect(homePage.signInLink).toHaveText(expect.stringContaining('Sign in'))
})

When('I click on {string} menu item', async function(menuItemName){
    const menuItemToClick = await menuPage.selectMenuItem(menuItemName)
    await menuItemToClick.click()
})