import { Page } from "./page.js";

class SearchResultsPage extends Page {
    get searchResultProducts() { return $$("#center_column .product_list li h5 a") }
}

export default new SearchResultsPage();
