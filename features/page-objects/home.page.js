import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class HomePage extends Page {
    async open() {
        await browser.navigateTo("http://www.automationpractice.pl/");
    }

    get signInLink() {
        return $("a[title='Log in to your customer account']");
    }

    get searchInputField() {
        return $("#search_query_top")
    }

    get searchIcon() { return $("button[name='submit_search']") }
}

export default new HomePage();
