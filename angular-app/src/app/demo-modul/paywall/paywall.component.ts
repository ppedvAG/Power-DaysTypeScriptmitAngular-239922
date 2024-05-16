import { Component } from '@angular/core';
import { DonationService } from '../../services/donation.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-paywall',
    templateUrl: './paywall.component.html',
    styles: ``,
})
export class PaywallComponent {
    constructor(private service: DonationService, private router: Router) {}

    submit(value: string) {
        const amount = Number(value);
        // Wenn das casting fehlschlaegt erhalten wir NaN: 'Not a Number'
        if (!isNaN(amount)) {
            this.service.payMoney(amount);
        }

        if (this.service.canProceed()) {
            this.router.navigate(['/photos']);
        }
    }
}
