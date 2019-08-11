import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
// import $ from 'jquery';
import { Phim } from 'src/app/models/phim';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
declare var $: any;
import Swiper from 'swiper';

@Component({
  selector: 'app-phim-dang-chieu',
  templateUrl: './phim-dang-chieu.component.html',
  styleUrls: ['./phim-dang-chieu.component.css']
})
export class PhimDangChieuComponent implements OnInit, AfterViewInit, OnDestroy {

  public sub: Subscription;

  public DanhSachPhim: Phim[] = [];

  public TrailerPhim: any;
  public phimTrailer: any = {};
  constructor(private activated: ActivatedRoute, private phimService: PhimServiceService) { }

  ngOnInit() {
    this.phimService.LayDanhSachPhim().subscribe(
      (kq: any) => {
        this.DanhSachPhim = kq;
        console.log(kq);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

  ngAfterViewInit() {

    $(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        // rtl: true,
        items: 5,
        loop: true,
        margin: 5,
        nav: true,
        rows: 2,
        rowsCount: 2,
        autoWidth: false,
        // autoplay: true,
        // autoplayTimeout: 2000,
        // autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
            nav: true
          },
          600: {
            items: 3,
            nav: false
          },
          1170: {
            items: 4,
            nav: true
          }
        }
      });
    });

    $(document).ready(function () {
      // initialize swiper when document ready
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        slidesPerColumn: 2,
        spaceBetween: 30,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true,
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
      $('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
        const paneTarget = $(e.target).attr('href');
        const $thePane = $('.tab-pane' + paneTarget);
        const paneIndex = $thePane.index();
        if ($thePane.find('.swiper-container').length > 0 && 0 === $thePane.find('.swiper-slide-active').length) {
          swiper[paneIndex].update();
        }
      });
    });
  }
}
