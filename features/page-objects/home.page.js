import { Page } from "./page.js";
import { browser } from "@wdio/globals";

class HomePage extends Page {
  async open() {
    await browser.navigateTo("http://www.automationpractice.pl/");
  }

  get signInLink() {
    return $("a[title='Log in to your customer account']");
  }
}

export default new HomePage();
