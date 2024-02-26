import { Page } from "./page.js";

class SearchResultsPage extends Page {
    get searchResultProducts() { return $$("#center_column .product_list li h5 a") }
    get searchResultColorLists() {return $$(".color-list-container ul")}

    get searchedProducts() {return $$("li .product-container")}
}



export default new SearchResultsPage();
