import { Page } from "./page.js";

class ProductAddedPopup extends Page {

    get proceedToCheckoutBtn() {
        return $("#layer_cart a[title='Proceed to checkout']")
    }

    get closePopupBtn() {
        return $("#layer_cart span[title='Close window']")
    }
}

export default new ProductAddedPopup();