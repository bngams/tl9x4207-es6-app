import { ProductForm } from "./components/product-form.js";
import { ProductCard } from "./components/product-card.js";
import { ProductList } from "./components/product-list.js";

export class App {
    constructor() {
        this.init();
    }

    init() {
        // declare custom markup
        customElements.define('product-form', ProductForm);
        customElements.define('product-list', ProductList);
        customElements.define('product-card', ProductCard);
    }
}

new App();