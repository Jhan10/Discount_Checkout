import { Item } from "./Item";

const C_PRECO = 20;

export class C implements Item{
    getPrice(): number {
        return C_PRECO;
    }
}