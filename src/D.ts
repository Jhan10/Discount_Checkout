import { Item } from "./Item";

const D_PRECO = 15;

export class D implements Item{
    getPrice(): number {
        return D_PRECO;
    }
}
