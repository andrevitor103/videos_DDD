import { Currency } from './src/Currency';
import Money from './src/Money';

let value = 120;

let money = Money.crete(Currency.BRL, value);

let otherMoney = Money.crete(Currency.USD, value);

console.log(money.equals(otherMoney));
console.log(money.toString());
