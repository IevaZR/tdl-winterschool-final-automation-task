import { Page } from "./page.js";

class AuthenticationPage extends Page {

    get createAnAccountHeading() { return $("#create-account_form h3") }

    get logInHeading() { return $("#login_form h3"); }

    get createAnAccountBtn() { return $("#SubmitCreate") }

    get submitLoginBtn() { return $("#SubmitLogin") }

    get orderSteps() { return $$("#order_step li") }
}

export default new AuthenticationPage();
