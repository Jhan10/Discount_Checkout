import { Store } from "../src/checkout";
import { Discount } from "../src/Discount";
import { ItemType } from "../src/Item";

describe('checkout test', () => {

    const discountA = new Discount(ItemType.A, 3, 20);
    const discountB = new Discount(ItemType.B, 2, 15);

    const store = new Store([discountA, discountB]);
    it('DEVE retornar 0 QUANDO não ha itens enviados', () => {
        expect(store.checkout("")).toBe(0);
    });
    it('DEVE retornar 50 QUANDO é enviado um A', () => {
        expect(store.checkout("A")).toBe(50);
    });
    it('DEVE retornar 30 QUANDO é enviado um B', () => {
        expect(store.checkout("B")).toBe(30);
    });
    it('DEVE retornar 20 QUANDO é enviado um C', () => {
        expect(store.checkout("C")).toBe(20);
    });
    it('DEVE retornar 15 QUANDO é enviado um D', () => {
        expect(store.checkout("D")).toBe(15);
    });
    it('DEVE retornar 30 QUANDO é enviado dois D', () => {
        expect(store.checkout("DD")).toBe(30);
    });
    it('DEVE retornar 115 QUANDO é enviado um de cada', () => {
        expect(store.checkout("ABCD")).toBe(115);
    });
    it('DEVE lançar um erro QUANDO é enviado um item desconhecido', () => {
        expect(() => store.checkout("Z")).toThrow("Unknown Item");
    });
    it('DEVE aplicar um desconto QUANDO houver 3 As', () => {
        expect(store.checkout("AAA")).toBe(130);
    });
    it('DEVE aplicar um desconto QUANDO houver 8 As', () => {
        expect(store.checkout("AAAAAAAA")).toBe(360);
    });
    it('DEVE aplicar duas vezes o desconto QUANDO houver 8 As', () => {
        expect(store.checkout("AAAAAAAA")).toBe(360);
    });
    it('DEVE aplicar duas vezes o desconto QUANDO houver 3 As', () => {
        expect(store.checkout("BBB")).toBe(75);
    });
});