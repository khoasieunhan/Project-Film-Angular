import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
declare var jQuery: any;
@Component({
  selector: 'app-quan-li-nguoi-dung',
  templateUrl: './quan-li-nguoi-dung.component.html',
  styleUrls: ['./quan-li-nguoi-dung.component.css']
})
export class QuanLiNguoiDungComponent implements OnInit, AfterViewInit {

  public Admin: any;
  constructor(private titleService: Title, private router: Router) { }

  ngOnInit() {
    this.titleService.setTitle('Trang Admin');
    if (localStorage.getItem('Admin')) {
      this.Admin = JSON.parse(localStorage.getItem('Admin'));
    }
  }

  DangXuat() {
    localStorage.removeItem('Admin');
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
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
