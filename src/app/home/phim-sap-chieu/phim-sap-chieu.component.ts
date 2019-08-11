import { Component, OnInit, AfterViewInit, SchemaMetadata } from '@angular/core';
import { Phim } from 'src/app/models/phim';
import { PhimServiceService } from 'src/app/service/phim-service.service';
declare var $: any;
import Swiper from 'swiper';
import { timeout } from 'q';

@Component({
  selector: 'app-phim-sap-chieu',
  templateUrl: './phim-sap-chieu.component.html',
  styleUrls: ['./phim-sap-chieu.component.css'],
})
export class PhimSapChieuComponent implements OnInit, AfterViewInit {

  public DanhSachPhimSC: Phim[] = [];
  constructor(private phimService: PhimServiceService) { }

  // slideConfig = {'slidesToShow': 3, 'slidesToScroll': 4};

  ngOnInit() {
    this.phimService.LayDanhSachPhimSC().subscribe(
      (data: any) => {
        this.DanhSachPhimSC = data;
        // console.log(this.DanhSachPhimSC);
      });
  }

  ngAfterViewInit() {
    // $(document).ready(function () {
    //   $('.owl-carousel').owlCarousel({
    //     // rtl: true,
    //     items: 5,
    //     loop: true,
    //     margin: 5,
    //     nav: true,
    //     rows: 2,
    //     rowsCount: 2,
    //     autoWidth: false,
    //     // autoplay: true,
    //     // autoplayTimeout: 2000,
    //     // autoplayHoverPause: true,
    //     responsiveClass: true,
    //     responsive: {
    //       0: {
    //         items: 1,
    //         nav: true
    //       },
    //       600: {
    //         items: 3,
    //         nav: false
    //       },
    //       1170: {
    //         items: 4,
    //         nav: true
    //       }
    //     }
    //   });
    // });

    $(document).ready(function () {
      // initialize swiper when document ready
      setTimeout(function () {
        const swiper = new Swiper('.swipper-container', {
          init: true,
          slidesPerView: 3,
          slidesPerColumn: 2,
          spaceBetween: 30,
          direction: 'horizontal',
          observer: true,
          observeParents: true,
          // pagination: {
          //   el: '.swiper-pagination',
          //   clickable: true,
          // },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          on: {
            init: function () {
              console.log('swiper initialized');
            },
          },
        });
        // $('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
        //   const paneTarget = $(e.target).attr('href');
        //   const $thePane = $('.tab-pane' + paneTarget);
        //   const paneIndex = $thePane.index();
        //   if ($thePane.find('.swiper-container').length > 0 && 0 === $thePane.find('.swiper-slide-active').length) {
        //     swiper[paneIndex].update();
        //   }
        // });
      }, 400);
    });
  }
}
