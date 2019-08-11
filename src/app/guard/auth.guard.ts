import { Injectable, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // public Admin: any = {};
  // public ngDungAd: any = {};
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Kiểm tra xem localstorage có chứa thuộc tính isadmin không
    if (localStorage.getItem('Admin')) {
      // swal({
      //   type: 'success',
      //   title: 'Good job!',
      //   text: 'Logged in successfully!',
      // });
      return true;
    } else {
      swal({
        type: 'error',
        title: 'Login failed!',
        text: 'Please login to admin account!',
      });
      // alert('Please login to admin account!');
      this.router.navigate(['/login']); // Nếu không có localstorage admin thì trả về trang chủ
    }
  }
}
