import { Page } from "./page.js";

class ProductsPage extends Page {

    get firstProductLink() { return $("(//ul[contains(@class, 'product_list')]//a[contains(@title, 'View')])[1]") }
}

export default new ProductsPage();
