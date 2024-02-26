import { Page } from "./page.js";

class ShoppingCartSummaryPage extends Page {

    get proceedToCheckoutBtn() {
        return $("#center_column a[title='Proceed to checkout']")
    }
}

export default new ShoppingCartSummaryPage();