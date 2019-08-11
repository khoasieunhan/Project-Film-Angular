import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class IsBookingGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (localStorage.getItem('nguoiDung')) {
      return true;
    } else {
      swal({
        type: 'error',
        title: 'Oops...',
        text: 'Please login before booking!',
      }).then(function () {
        // location.href = ('');
        // tslint:disable-next-line:max-line-length
      });
      // this.router.navigate(['']);
    }
  }
}
