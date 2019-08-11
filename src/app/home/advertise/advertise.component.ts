import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-advertise',
  templateUrl: './advertise.component.html',
  styleUrls: ['./advertise.component.css']
})
export class AdvertiseComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.slick-list').slick({
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      });
    });
  }

}
