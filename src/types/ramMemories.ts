import { Product, productProps } from "./product";



export class RamMemories extends Product{
    constructor({
        title, fullTitle, description,
        brand,images,price
    }: Omit<productProps, 'category'>){
        super({
            title,fullTitle,description,brand,
            images,price,category:'Memorias Ram'
        })
    }
}