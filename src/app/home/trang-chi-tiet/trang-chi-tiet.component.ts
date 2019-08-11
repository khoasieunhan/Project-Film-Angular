import { Component, OnInit, OnDestroy, AfterViewInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { Subscription, pipe } from 'rxjs';
import { Title } from '@angular/platform-browser';
import * as moment from 'moment'; // add this 1 of 4
import WOW from 'wow.js';
declare var $: any;

@Component({
  selector: 'app-trang-chi-tiet',
  templateUrl: './trang-chi-tiet.component.html',
  styleUrls: ['./trang-chi-tiet.component.css']
})
export class TrangChiTietComponent implements OnInit, OnDestroy, AfterViewInit {
  public MaPhim: string;

  public ChiTietPhim: any = {};
  // phim: any = {};
  public TrailerPhim: string;

  private subParam: Subscription;

  currentDate: any;
  weekStart: any;
  weekEnd: any;
  days: any = [];
  weekDays: any;
  selectedDate: any;
  // dateNow: Date = new Date().getDate();
  // day: Date = new Date().getDay();
  // dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  constructor(private activated: ActivatedRoute, private phimService: PhimServiceService, private titleService: Title) {
    for (let i = 0; i <= 6; i++) {
      this.days.push(moment(this.weekStart).add(i, 'days'));
    }
  }

  // today: any = this.dayNames[this.day.getDate()];
  // weekDays: any = this.dayNames;

  TodoCtrl (day) {
    this.selectedDate = day;
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf('week');
    // const weekEnd = currentDate.clone().endOf('week');
    const days = [];
    for (let i = 0; i <= 6; i++) {
      days.push(moment(weekStart).add(i, 'days'));
    }
      // day.active = !day.active;
      day.weekDays = days;
      console.log(day.weekDays);
  }

  ngOnInit() {
    // this.titleService.setTitle(this.ChiTietPhim.TenPhim);
    this.subParam = this.activated.queryParams.subscribe(
      (params) => {
        this.MaPhim = params.MaPhim;
        this.titleService.setTitle(params.TenPhim);
        this.phimService.LayChiTietPhim(this.MaPhim).subscribe(
          (res) => {
            this.ChiTietPhim = res;
            console.log(this.ChiTietPhim);
            let traiLer = this.ChiTietPhim.Trailer;
            traiLer = traiLer.split('watch?v=');
            this.TrailerPhim = traiLer[1];
          });
      });

    this.currentDate = moment();
    this.weekStart = this.currentDate.clone().startOf('week');
    this.weekEnd = this.currentDate.clone().endOf('week');
    this.weekDays = this.days;
    console.log(this.weekDays);
    this.selectedDate = this.weekDays[0];
  }

  ngOnDestroy() {
    this.subParam.unsubscribe();
  }

  ngAfterViewInit() {
    $(document).ready(function () {
      $('.js-modal-btn').modalVideo();
    });

    $(document).ready(function () {
      $('.btnBuyTicketDetail').click(function () {
        $('html, body').animate({
          scrollTop: $('#myTabContent').offset().top
        }, 1000);
      });
    });

    const wow = new WOW();
    wow.init();
  }
}
