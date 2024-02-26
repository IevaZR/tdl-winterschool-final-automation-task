import { When } from "@wdio/cucumber-framework";
import productsPage from "../page-objects/products.page.js";

When("I click on the first product", async function () {
    await productsPage.firstProductLink.click()
});
