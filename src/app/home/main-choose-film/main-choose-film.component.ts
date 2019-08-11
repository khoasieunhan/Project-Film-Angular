import { Component, OnInit } from '@angular/core';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { Phim } from 'src/app/models/phim';

@Component({
  selector: 'app-main-choose-film',
  templateUrl: './main-choose-film.component.html',
  styleUrls: ['./main-choose-film.component.css']
})
export class MainChooseFilmComponent implements OnInit {

  public show: any = false;
  public DanhSachPhim: Phim[] = [];
  public ChiTietPhim: any = [];
  public maLichChieu: any;
  public maPhim: any;
  constructor(private phimService: PhimServiceService) { }

  ngOnInit() {
    this.phimService.LayDanhSachPhim().subscribe(
      (data: any) => {
        this.DanhSachPhim = data;
      });
  }

  clickPhim (maPhim: any) {
    console.log(maPhim);
    this.maPhim = maPhim;
    this.phimService.LayChiTietPhim(this.maPhim).subscribe(
      (res: any) => {
        this.ChiTietPhim = res;
        console.log(this.ChiTietPhim);
      });
  }

  showHide() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
