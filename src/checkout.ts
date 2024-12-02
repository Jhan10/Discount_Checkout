import { itemFactory, ItemType } from "./Item";
import { Discount } from "./Discount";

export class Store {
    constructor(private discountList?: Discount[]){ }
    
    checkout(itemList: string): number{
        const total = this.calculateTotal(itemList);
        const totalDiscount = this.calculateDiscount(itemList);

        return total - totalDiscount;
    }

    private calculateDiscount(itemList: string) {
        let totalDiscount = 0;
        for (const discount of this.discountList) {
            totalDiscount += discount.calculateDiscount(itemList);
        }
        return totalDiscount;
    }

    private calculateTotal(itemList: string) {
        let total = 0;
        for (const itemChar of itemList.split("")) {
            const item = itemFactory(itemChar);
            total += item.getPrice();
        }

        return total;
    }
}