import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DonationService {
    amount = 0;
    readonly minimum = 1;

    constructor() {}

    payMoney(value: number) {
        this.amount += value;
    }

    canProceed() {
        return this.amount >= this.minimum;
    }
}
