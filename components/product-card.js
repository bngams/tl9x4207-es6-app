import { AppComponent } from "./app-component.js";

const TEMPLATE = `
<div class="product-card mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
        <h2 class="mdl-card__title-text">
            <span class="product-name"></span>
            <span class="product-price"></span>
        </h2>
    </div>
    <div class="mdl-card__supporting-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </div>
    <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            View Updates
        </a>
    </div>
</div>
`;

export class ProductCard extends AppComponent {

    constructor(product) {
        super();
        this.product = product;
    }

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.productName = this.querySelector('.product-name');
        this.productPrice = this.querySelector('.product-price');
    }

    onReady() {
        this.productName.innerHTML = this.product.name;
        this.productPrice.innerHTML = this.product.price;
    }
}