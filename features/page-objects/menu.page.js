import { Page } from "./page.js";

class MenuPage extends Page {

    async selectMenuItem(menuItem) {
        const selectedMenuItem = await $(`#block_top_menu>ul>li>a[title="${menuItem}"]`)
        return selectedMenuItem
    }
}

export default new MenuPage();