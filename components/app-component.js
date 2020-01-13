// Module JS
// notation  import et export
// export = public 
export class AppComponent extends HTMLElement {
    /** called when inserted in DOM */
    connectedCallback() {
        // display temaplte
        this.display();
        // link class with template dom elements
        this.bindElements();
        // link class with template events
        this.bindEvents();
        // then, component is ready
        this.onReady();
    }

    display() { }
    bindElements() { }
    bindEvents() { }
    onReady() { }
}