import { Then, When } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";
import searchResultsPage from "../page-objects/search-results.page.js";

When("I enter {string} in the search field", async function (string) {
    await homePage.searchInputField.setValue(string)
})

When("I click on search icon", async function () {
    await homePage.searchIcon.click()
})

Then("I get only results with product names containing {string}", async function (string) {
    const receivedProducts = await searchResultsPage.searchResultProducts
    const searchedWords = string.toLowerCase().split(' ')
    for (const item of receivedProducts) {
        let productName = await item.getText()
        productName = productName.toLowerCase()
        const allWordsFound = searchedWords.every(word => productName.includes(word));
        if (!allWordsFound) {
            await item.moveTo()
            throw new Error(`Product does not match search query "${string}"`);
        }
    }
    return true
})

Then("I get only results with product names and product colors containing {string}", async function (string) {
    const receivedProducts = await searchResultsPage.searchedProducts
    const searchedWords = string.toLowerCase().split(' ')
    for (const item of receivedProducts) {
        let productName = await item.getText()
        productName = productName.toLowerCase()
        const allWordsFound = searchedWords.every(word => productNameText.includes(word));
        if (!allWordsFound) {
            let colorMatchFound = false;
            const productColorLinks = await item.$$('.color-list-container a')
            for (const colorLink of productColorLinks) {
                const href = await colorLink.getAttribute('href');
                const colorFound = searchedWords.every(word => href.includes(word));
                if (colorFound) {
                    colorMatchFound = true;
                    break;
                }
            }
            if (!colorMatchFound) {
                await item.moveTo()
                throw new Error(`Product does not match search query "${string}"`);
            }
        }
    }
})

