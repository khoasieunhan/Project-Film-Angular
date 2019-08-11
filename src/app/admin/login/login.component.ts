import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var jQuery: any;
declare var $: any;
import tilt from 'tilt.js';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  public Admin: any = {};
  public ngDungAd: any = 'QuanTri';
  public isLogin = false;
  constructor(private svNguoiDung: NgDungServiceService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('Admin')) {
      this.Admin = JSON.parse(localStorage.getItem('Admin'));
    }
    if (localStorage.getItem('ngDungAd')) {
      this.ngDungAd = JSON.parse(localStorage.getItem('ngDungAd'));
    }
  }

  DangNhap(taiKhoan: any, matKhau: any) {
    this.svNguoiDung.DangNhap(taiKhoan, matKhau).subscribe(
      (kq: any) => {
        if (kq !== 'Tài khoản hoặc mật khẩu không đúng !' && kq.MaLoaiNguoiDung === this.ngDungAd) {
          this.Admin = kq;
          // this.ngDungAd = kq.MaLoaiNguoiDung;
          // this.isLogin = false;
          swal({
            type: 'success',
            title: 'Good job!',
            text: 'Logged in successfully!',
          }).then(function () {
            location.href = ('/admin'); // Load lại trang sau khi đăng nhập thành công
          });
          // Lưu vào storage
          localStorage.setItem('Admin', JSON.stringify(this.Admin)); // Lưu storage
          localStorage.setItem('ngDungAd', JSON.stringify(this.ngDungAd));

        } else {
          localStorage.removeItem('Admin');
          swal({
            type: 'error',
            title: 'Oop...!',
            text: 'The account or password is incorrect!',
          });
          this.router.navigate(['/login']);
          // this.Admin = {};
          // this.isLogin = true;
          // localStorage.setItem('Admin', '');
        }
      });
  }

  ngAfterViewInit() {

    $('.js-tilt').tilt({
      scale: 1.1
    });
    // tslint:disable-next-line:no-shadowed-variable
    (function ($) {
      'use strict'; // Start of use strict

      // Toggle the side navigation
      $('#sidebarToggle').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('sidebar-toggled');
        $('.sidebar').toggleClass('toggled');
      });

      // Prevent the content wrapper from scrolling when the fixed side navigation hovered over
      $('body.fixed-nav .sidebar').on('mousewheel DOMMouseScroll wheel', function (e) {
        if ($(window).width() > 768) {
          const e0 = e.originalEvent,
            delta = e0.wheelDelta || -e0.detail;
          this.scrollTop += (delta < 0 ? 1 : -1) * 30;
          e.preventDefault();
        }
      });

      // Scroll to top button appear
      $(document).on('scroll', function () {
        const scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
          $('.scroll-to-top').fadeIn();
        } else {
          $('.scroll-to-top').fadeOut();
        }
      });

      // Smooth scrolling using jQuery easing
      $(document).on('click', 'a.scroll-to-top', function (event) {
        const $anchor = $(this);
        $('html, body').stop().animate({
          scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1000, 'easeInOutExpo');
        event.preventDefault();
      });

    })(jQuery); // End of use strict
  }
}
