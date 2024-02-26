import { Page } from "./page.js";

class ProductsPage extends Page {
    get firstProductLink() {
        return $("(//*[@class='product_img_link'])[1]");
    }
}

export default new ProductsPage();
