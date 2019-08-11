import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import * as Chart from 'chart.js';
import { NguoiDung } from 'src/app/models/nguoiDung';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import { ModalLoginAdminService } from 'src/app/service/modal-login-admin.service';
import { Router } from '@angular/router';
declare var jQuery: any;

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css']
})
export class AdminLayoutComponent implements OnInit, AfterViewInit {
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
    // location.href = ''; // Load lại trang sau khi đăng xuất
    this.router.navigate(['/login']);
  }

  ngAfterViewInit() {
    // Set new default font family and font color to mimic Bootstrap's default styling
    // tslint:disable-next-line:max-line-length
    Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
    Chart.defaults.global.defaultFontColor = '#292b2c';

    // Area Chart Example
    const ctx = document.getElementById('myAreaChart');
    const myLineChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Mar 1', 'Mar 2', 'Mar 3', 'Mar 4', 'Mar 5', 'Mar 6', 'Mar 7', 'Mar 8', 'Mar 9', 'Mar 10', 'Mar 11', 'Mar 12', 'Mar 13'],
        datasets: [{
          label: 'Sessions',
          lineTension: 0.3,
          backgroundColor: 'rgba(2,117,216,0.2)',
          borderColor: 'rgba(2,117,216,1)',
          pointRadius: 5,
          pointBackgroundColor: 'rgba(2,117,216,1)',
          pointBorderColor: 'rgba(255,255,255,0.8)',
          pointHoverRadius: 5,
          pointHoverBackgroundColor: 'rgba(2,117,216,1)',
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451],
        }],
      },
      options: {
        scales: {
          xAxes: [{
            time: {
              unit: 'date'
            },
            gridLines: {
              display: false
            },
            ticks: {
              maxTicksLimit: 7
            }
          }],
          yAxes: [{
            ticks: {
              min: 0,
              max: 40000,
              maxTicksLimit: 5
            },
            gridLines: {
              color: 'rgba(0, 0, 0, .125)',
            }
          }],
        },
        legend: {
          display: false
        }
      }
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
