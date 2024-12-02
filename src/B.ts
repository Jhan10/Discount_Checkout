import { Item } from "./Item";

const B_PRECO = 30;

export class B implements Item{
    getPrice(): number {
        return B_PRECO;
    }
}