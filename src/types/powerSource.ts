import { Product, productProps } from "./product";



export class PowerSource extends Product{
    constructor({
        title,fullTitle,description,
        brand,images,price
    }: Omit<productProps, 'category'>){
        super({
            title,fullTitle,description,
            brand,images,price,
            category: 'Fuentes de poder'
        })
    }
}