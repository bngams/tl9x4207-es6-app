export class HttpClient {

    static get(url) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            // get response
            // Syntax1
            // xhr.addEventListener("load", () => {
            // })
            // Syntax2
            xhr.onload = () => {
                resolve(xhr.responseText);
            }
            xhr.onerror = () => {
                reject(xhr.responseText);
            }
            // multiple operations
            // launch request
            xhr.send();
        });
    }

    static testPromise() {
        new Promise( (resolve, reject) => {        
            // mon traitement asynchrone
            setTimeout(() => {
                // envoyer ma reponse
                resolve("Done");
            }, 3000);
        })
    }
}