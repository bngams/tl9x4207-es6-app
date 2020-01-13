import { AppComponent } from "./app-component.js";
import { ProductCard } from "./product-card.js";

const TEMPLATE = `
<div id="product-list">
    <product-card></product-card>
</div>
`;

export class ProductList extends AppComponent {
    display() {
        this.innerHTML = TEMPLATE;
    }
}
