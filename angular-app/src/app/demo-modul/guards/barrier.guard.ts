import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { DonationService } from '../../services/donation.service';

// neue Syntax bei neuester Angular Version
export const barrierGuard: CanActivateFn = (route, state) => {
    return true;
};

@Injectable({
    providedIn: 'root',
})
export class CanActivateRouteGuard implements CanActivate {
    constructor(private router: Router, private service: DonationService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.service.canProceed()) {
            this.router.navigate(['/donation']);
            return false;
        }
        return true;
    }
}
