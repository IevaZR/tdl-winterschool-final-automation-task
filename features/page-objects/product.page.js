import { Page } from "./page.js";

class ProductPage extends Page {

    get productAvailability() { return $("#availability_value") }

    get sizeFieldDropDown() { return $("select#group_1") }

    get sizeFieldDropDownOptions() { return $$("#uniform-group_1 option") }

    get addToCartBtn() { return $("#add_to_cart button") }

    async getAvailableSize() {

        const options = await this.sizeFieldDropDownOptions
        const optionsCount = options.length

        for (let i = 0; i < optionsCount; i++) {
            await this.sizeFieldDropDown.selectByIndex(i)
            const productAvailable = await this.productAvailability.getText()
            if (productAvailable == "In stock") {
                return true
            }
        }
        return false
    }
}

export default new ProductPage();