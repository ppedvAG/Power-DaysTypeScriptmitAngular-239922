import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DonationService } from '../../services/donation.service';

interface LoginData {
    email: string;
    password: string;
}

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    login: LoginData = {
        email: 'john.doe@example.com',
        password: '******',
    };

    constructor(private service: DonationService) {}

    submit(form: NgForm) {
        if (form.valid) {
            console.log(`${this.login.email} has signed In`);
            this.service.payMoney(100);
        }
    }
}
