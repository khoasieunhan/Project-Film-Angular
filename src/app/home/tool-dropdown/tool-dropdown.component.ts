import { Component, OnInit, OnDestroy } from '@angular/core';
import { SlideInOutAnimation } from './animation';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import * as moment from 'moment'; // add this 1 of 4
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-tool-dropdown',
  templateUrl: './tool-dropdown.component.html',
  styleUrls: ['./tool-dropdown.component.css'],
  animations: [SlideInOutAnimation]
})
export class ToolDropdownComponent implements OnInit, OnDestroy {
  animationState = 'in';
  public DanhSachPhim: any = [];
  public DanhSachRap: any[] = [];
  public loadingTenPhim: any = false;
  public loadingTenRap: any = false;
  public loadingDay: any = false;
  public loadingDate: any = false;
  public canBuyNowTool: any = false;

  TenRap: any;
  TenPhim: any;
  day: Date = new Date();
  maPhim: any;
  ChiTietPhim: any = [];
  isShowMovie: any = false;
  isChoseCinema: any = false;
  isChoseDate: any = false;
  isChoseMovie: any = false;
  phimCT: any;
  maLichChieu: any;
  lichChieu: any = {};

  private subParam: Subscription;
  private subDanhSachGhe: Subscription;
  currentDate: any;
  weekStart: any;
  weekEnd: any;
  days: any = [];
  weekDays: any;
  selectedDate: any;
  constructor(private phimService: PhimServiceService, private activated: ActivatedRoute, private titleService: Title) {
    for (let i = 0; i <= 6; i++) {
      this.days.push(moment(this.weekStart).add(i, 'days'));
    }
  }

  DanhSachRapPhim = {
    CgvCinema: [
      { RapPhim: 'GLX', TenRap: 'Nguyễn Du', image: './assets/cgv.png' },
      { RapPhim: 'GLX', TenRap: 'Kinh Dương Vương', image: './assets/cgv.png' },
      { RapPhim: 'GLX', TenRap: 'Quang Trung', image: './assets/cgv.png' },
      { RapPhim: 'GLX', TenRap: 'Trung Chánh', image: './assets/cgv.png' },
      { RapPhim: 'GLX', TenRap: 'Phạm Văn Chí', image: './assets/cgv.png' },
      { RapPhim: 'GLX', TenRap: 'Huỳnh Tấn Phát', image: './assets/cgv.png' },
      { RapPhim: 'GLX', TenRap: 'Nguyễn Văn Quá', image: './assets/cgv.png' },
    ],

    BHDStarCineplex: [
      { RapPhim: 'BHD Star', TenRap: 'Phạm Hùng', image: './assets/bhd.png' },
      { RapPhim: 'BHD Star', TenRap: 'Vincom Lê Văn Việt', image: './assets/bhd.png' },
    ],

    LotteCinema: [
      { RapPhim: 'LOTTE', TenRap: 'Nam Sài Gòn', image: './assets/lotte.png' },
      { RapPhim: 'LOTTE', TenRap: 'Cộng Hòa', image: './assets/lotte.png' },
      { RapPhim: 'LOTTE', TenRap: 'Cantavil', image: './assets/lotte.png' },
      { RapPhim: 'LOTTE', TenRap: 'Phú Thọ', image: './assets/lotte.png' },
      { RapPhim: 'LOTTE', TenRap: 'Nowzone', image: './assets/lotte.png' },
      { RapPhim: 'LOTTE', TenRap: 'Huỳnh Tấn Phát', image: './assets/lotte.png' },
      { RapPhim: 'LOTTE', TenRap: 'Nguyễn Văn Quá', image: './assets/lotte.png' },
    ],

    CineStar: [
      { RapPhim: 'CNS', TenRap: 'Quốc Thanh', image: './assets/cineStart.png' },
      { RapPhim: 'CNS', TenRap: 'Hai Bà Trưng', image: './assets/cineStart.png' }
    ],
  };

  TodoCtrl(day) {
    this.selectedDate = day;
    const currentDate = moment();
    const weekStart = currentDate.clone().startOf('week');
    // const weekEnd = currentDate.clone().endOf('week');
    // const days = [];
    for (let i = 0; i <= 6; i++) {
      this.days.push(moment(weekStart).add(i, 'days'));
    }
    // day.active = !day.active;
    day.weekDays = this.days;
    console.log(day.weekDays);
  }

  toggleShowDiv(divName: string) {
    this.isChoseMovie = true;
    if (divName === 'divA') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }

  chooseDay(day: any) {
    this.loadingDay = true;
    this.isChoseDate = true;
    this.day = day._d;
  }

  choosePhim(phimTen: any) {
    this.loadingTenPhim = true;
    this.isShowMovie = true;
    this.TenPhim = phimTen.TenPhim;
    this.maPhim = phimTen.MaPhim;
    // this.maLichChieu = phimTen.MaLichChieu;
    // this.subParam = this.activated.queryParams.subscribe(
    //   (data: any) => {
    //   });
    this.titleService.setTitle(this.TenPhim);
    this.phimService.LayChiTietPhim(this.maPhim).subscribe(
      (res: any) => {
        this.ChiTietPhim = res;
        console.log(res);
      });
    // this.subDanhSachGhe = this.phimService.LayDanhSachGhe(this.maLichChieu).subscribe
    //   ((result) => {
    //     console.log(result);
    //     this.lichChieu = result;
    //   });
  }

  chooseRap(rapTen: any) {
    this.loadingTenRap = true;
    this.isChoseCinema = true;
    this.TenRap = rapTen.TenRap;
  }

  chooseCT(phimCT: any) {
    this.canBuyNowTool = true;
    this.loadingDate = true;
    this.phimCT = phimCT.NgayChieuGioChieu;
    this.maLichChieu = phimCT.MaLichChieu;
    // console.log(this.maLichChieu);
    this.subParam = this.activated.queryParams.subscribe(
      (data: any) => {
        this.subDanhSachGhe = this.phimService.LayDanhSachGhe(this.maLichChieu).subscribe
          ((result) => {
            console.log(result);
            this.lichChieu = result;
          });
      });
  }

  ngOnInit() {
    this.phimService.LayDanhSachPhim().subscribe(
      (data: any) => {
        this.DanhSachPhim = data;
      });

    // this.phimService.LayDSRapPhim().subscribe(
    //   (data: any) => {
    //     console.log(data);
    //     this.DanhSachRap = data;
    //   });

    this.currentDate = moment();
    this.weekStart = this.currentDate.clone().startOf('week');
    this.weekEnd = this.currentDate.clone().endOf('week');
    this.weekDays = this.days;
    console.log(this.weekDays);
    this.selectedDate = this.weekDays[0];
  }

  ngOnDestroy() {
    // this.subParam.unsubscribe();
    // this.subDanhSachGhe.unsubscribe();
  }
}
