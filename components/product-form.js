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
}