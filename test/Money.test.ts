import { pathsToModuleNameMapper } from "ts-jest";
import { Currency } from "../src/Currency";
import Money from "../src/Money"

test('deve comparar os VOs', () => {
    let currency = Currency.BRL;
    let value = 12;

    let money = Money.crete(currency, value);
    let otherMoney = Money.crete(currency, value);

    expect(money.equals(otherMoney)).toBeTruthy();

    currency = Currency.USD;
    otherMoney = Money.crete(currency, value);
    
    expect(money.equals(otherMoney)).toBeFalsy();

    money = money.sum(10);//22

    expect(money.value).toBe(22);

})