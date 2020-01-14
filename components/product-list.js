import { AppComponent } from "./app-component.js";
import { ProductCard } from "./product-card.js";

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
            this.productsContainer.appendChild(new ProductCard(e.detail));
        })
    }
}
