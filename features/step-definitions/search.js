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

Then("I get only results with product names containing search query", async function () {
    const receivedProducts = await searchResultsPage.searchResultProducts
    const searchedWords = this.searchQuery.toLowerCase()
    for (const item of receivedProducts) {
        let productName = await item.getText()
        productName = productName.toLowerCase()
        const searchWords = searchedWords.split(' ')
        const allWordsFound = searchWords.every(word => productName.includes(word));
        if (!allWordsFound) {
            await item.moveTo()
            throw new Error("Product name does not contain the search query.");
        }
    }
    return true
})

Then("I get only results with product names and product colors containing search query", async function() {
    const products = await searchResultsPage.searchedProducts
    const searchedWords = this.searchQuery.toLowerCase().split(' ')

    for(const item of products) {
        let productName = await item.$('h5 a')
        let productNameText = await productName.getText()
        productNameText = productNameText.toLowerCase()

        const productColors = await item.$$('.color-list-container a')
        const allWordsFound = searchedWords.every(word => productNameText.includes(word));
        if(!allWordsFound) {
            for(const item of productColors) {
                const href = await item.getAttribute('href');
                const colorFound = searchedWords.every(word => href.includes(word));
                if (!colorFound) {
                    await item.moveTo()
                    throw new Error(`Product does not match search query "${this.searchQuery}"`);
                }
            }
        }
    }
    // const receivedProductColors = await searchResultsPage.searchResultColorLists
    // const searchedWords = this.searchQuery.toLowerCase()
    // for (const item of receivedProducts) {
    //     let productName = await item.getText()
    //     productName = productName.toLowerCase()
    //     const searchWords = searchedWords.split(' ')
    //     const allWordsFound = searchWords.every(word => productName.includes(word));
    //     if (!allWordsFound) {
    //         await item.moveTo()
    //         throw new Error("Product name does not contain the search query.");
    //     }
    // }
    // return true
})