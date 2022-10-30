import { Currency } from "./Currency";
import { ValueObject } from "./ValueObject";

export default class Money implements ValueObject {
    
    public readonly currency: Currency;
    public readonly value: number;

    private constructor(
        currency: Currency, 
        value: number
        ) {
            this.currency = currency;
            this.value = value;
    }

    public static crete(currency: Currency, value: number): Money {
        return new Money(currency, value);
    }

    public equals(otherMoney: Money): boolean {
        return otherMoney.currency === this.currency && otherMoney.value === this.value;
    }

    public sum(value: number): Money {
        const newValue = this.value + value;
        return new Money(this.currency, newValue);
    }

    public toString(): string {
        return `${this.currency} ${this.value}`;
    }

}
