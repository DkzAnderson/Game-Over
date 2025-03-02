export interface productProps {
    title: string;
    fullTitle: string;
    category: string;
    description: string[];
    brand: string;
    images: string[];
    price: number;
    offer?: boolean;
    discount?: number;
    quantity?: number;
}

export class Product {
    title: string;
    fullTitle: string;
    description: string[];
    category: string;
    brand: string;
    images: string[];
    price: number;
    offer?: boolean;
    discount?: number;
    quantity?: number;

    constructor({
        title,category,
        images,price,
        description, brand,
        fullTitle,offer= false,
        discount= 0,
        quantity=1
    }: productProps){
        this.title = title;
        this.fullTitle = fullTitle
        this.category = category;
        this.images = images;
        this.price = price;
        this.description = description;
        this.brand = brand;
        this.offer = offer ?? false;
        this.discount = discount ?? 0;
        this.quantity = quantity ?? 1;
    }

    setOffert(value:number){
        this.offer = true;
        this.discount = value;
    }

    calculateDiscount(){
        if(this.discount != undefined){
            const discount = this.discount / 100;
            let result = (this.price * discount).toFixed(2);
            const priceAfterDiscount = Number(result);
            return priceAfterDiscount;
        }
    }

}