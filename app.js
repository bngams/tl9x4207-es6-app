import { ProductForm } from "./components/product-form.js";

export class App {
    constructor() {
        this.init();
    }

    init() {
        // declare custom markup
        customElements.define('product-form', ProductForm);
    }
}

new App();