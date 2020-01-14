import { HttpClient } from "../utils/http-client.js";

export class ProductService {

    static getProducts() {
        // return promise object
        return HttpClient.get('http://localhost:3004/products');
    }

    static async getProductsWait() {
        // return syncrhonous response
        let response = await HttpClient.get('http://localhost:3004/products');
        return JSON.parse(response);
    }
}