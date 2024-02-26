import { Then, When } from "@wdio/cucumber-framework";
import homePage from "../page-objects/home.page.js";
import searchResultsPage from "../page-objects/search-results.page.js";

When("I enter {string} in the search field", async function (word) {
    await homePage.searchInputField.setValue(word)
    this.searchQuery = word
})

When("I click on search icon", async function () {
    await homePage.searchIcon.click()
})

Then("I get only results containing search query", async function () {
    const receivedProducts = await searchResultsPage.searchResultProducts
    const searchedWords = this.searchQuery.toLowerCase()
    for (const item of receivedProducts) {
        let productName = await item.getText()
        productName = productName.toLowerCase()
        const searchWords = searchedWords.split(' ')
        const allWordsFound = searchWords.every(word => productName.includes(word));
        expect(allWordsFound).toBe(true);
    }
})