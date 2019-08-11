import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
import Swiper from 'swiper';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.css']
})
export class LoaiPhimComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // $(document).ready(function () {
    //   // initialize swiper when document ready
    //   setTimeout(function () {
    //     const swiper = new Swiper('.swipper-container', {
    //       init: true,
    //       slidesPerView: 3,
    //       slidesPerColumn: 2,
    //       spaceBetween: 30,
    //       direction: 'horizontal',
    //       observer: true,
    //       observeParents: true,
    //       // pagination: {
    //       //   el: '.swiper-pagination',
    //       //   clickable: true,
    //       // },
    //       navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //       },
    //       on: {
    //         init: function () {
    //           console.log('swiper initialized');
    //         },
    //       },
    //     });
    //     $('a[data-toggle="pill"]').on('shown.bs.tab', function(e) {
    //       const paneTarget = $(e.target).attr('href');
    //       const $thePane = $('.tab-pane' + paneTarget);
    //       const paneIndex = $thePane.index();
    //       if ($thePane.find('.swiper-container').length > 0 && 0 === $thePane.find('.swiper-slide-active').length) {
    //         swiper[paneIndex].update();
    //       }
    //     });
    //   }, 400);
    // });
  }
}
