import { Page } from "./page.js";

class CartDropDownPage extends Page {

    get productRemoveBtn() { return $(".ajax_cart_block_remove_link") }
}

export default new CartDropDownPage();