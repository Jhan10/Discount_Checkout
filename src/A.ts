import { Item } from "./Item";

const A_PRECO = 50;

export class A implements Item{
    getPrice(): number {
        return A_PRECO;
    }
}