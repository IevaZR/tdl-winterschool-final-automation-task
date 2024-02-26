import { Page } from "./page.js";

class ProductAddedPopup extends Page {

    get proceedToCheckoutBtn() {
        return $("#layer_cart a[title='Proceed to checkout']")
    }
}

export default new ProductAddedPopup();