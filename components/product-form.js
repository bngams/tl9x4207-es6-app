// dynamic load a dependancy
// Modules JS - Module Loaders
// Systems JS
import { AppComponent } from './app-component.js';

const TEMPLATE = `
    <form id="product-form">
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="product-name">
            <label class="mdl-textfield__label" for="product-name">name...</label>
        </div>
        <div class="mdl-textfield mdl-js-textfield">
            <input class="mdl-textfield__input" type="text" id="product-price">
            <label class="mdl-textfield__label" for="product-price">price...</label>
        </div>
        <button type="button" id="submit-btn"
            class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
            Save
        </button>
    </form>
`;

// <product-form>
// html / template
//</product-form>
export class ProductForm extends AppComponent {

    display() {
        this.innerHTML = TEMPLATE;
    }

    bindElements() {
        this.inputName = this.querySelector('#product-name');
        this.inputPrice = this.querySelector('#product-price');
        this.btnSubmit = this.querySelector('#submit-btn');
    }

    bindEvents() {
        this.btnSubmit.addEventListener('click', () => {
            this.saveProduct();
        })
    }

    saveProduct() {
        let product = {
            name: this.inputName.value,
            price: this.inputPrice.value
        };
        console.log('My product ', product);
        // create custom event, to send product object
        // CustomEvent('event-name', ObjectProperties)
        let event = new CustomEvent('add-product', {
            detail: product
        });
        // dispatch event on all document (all page)
        document.dispatchEvent(event);
    }
}