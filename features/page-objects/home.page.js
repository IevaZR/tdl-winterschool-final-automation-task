import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class HomePage extends Page {

    async open() { await browser.navigateTo("http://www.automationpractice.pl/") }

    get logoELement() { return $("#header_logo") }

    get signInLink() { return $("a[title='Log in to your customer account']") }

    get searchInputField() { return $("#search_query_top") }

    get searchIcon() { return $("button[name='submit_search']") }

    get cartElementQuantity() { return $(".shopping_cart .ajax_cart_quantity") }

    get cartElement() { return $("a[title='View my shopping cart']") }
}

export default new HomePage();
