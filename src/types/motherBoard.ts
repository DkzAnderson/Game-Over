import { Product, productProps } from "./product";


export class MotherBoard extends Product {
    constructor({
        title, fullTitle, description,
        brand, images, price
    }: Omit<productProps, 'category'>) {
        super({
            title, fullTitle, description,
            brand, images, price,
            category: 'Tarjetas madre'
        });
    }
}