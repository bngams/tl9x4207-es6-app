import { AppComponent } from "./app-component.js";
import { ProductCard } from "./product-card.js";
import { ProductService } from "../services/product-service.js";

const TEMPLATE = `
<div id="product-list">
</div>
`;

export class ProductList extends AppComponent {
    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.productsContainer = this.querySelector('#product-list');
    }

    bindEvents() {
        this.listenProductAddEvent();
    }

    listenProductAddEvent() {
        document.addEventListener('add-product', (e) => {
            this.addCard(e.detail);
        })
    }

    addCard(product) {
        this.productsContainer.appendChild(new ProductCard(product));
    }

    loadProducts() {
        let promise = ProductService.getProducts();
        promise
            .then((response) => {
                console.log('Response AJAX Call ', response);
                this.initCards(JSON.parse(response));
            })
            .catch((error) => {

            });
    }

    loadProductsWait() {
        this.initCards(ProductService.getProductsWait());
    }

    initCards(products) {
        for (let p of products) {
            this.addCard(p);
        }
    }

    onReady() {
        this.loadProducts();
        // this.loadProductsWait();
    }
}
