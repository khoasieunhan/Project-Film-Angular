import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var $: any;
import swal from 'sweetalert2';

@Component({
  selector: 'app-app-action',
  templateUrl: './app-action.component.html',
  styleUrls: ['./app-action.component.css']
})
export class AppActionComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  clickAlert() {
    swal('Coming Soon....');
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.slick-list-1').slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: false,
        nextArrow: false
      });
    });
  }
}
