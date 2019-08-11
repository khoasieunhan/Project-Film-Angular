// tslint:disable-next-line:max-line-length
import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, Injectable } from '@angular/core';
import { Subscription, timer } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { Title } from '@angular/platform-browser';
import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
declare var $: any;
import WOW from 'wow.js';
import { PhimBehaviorService } from 'src/app/service/phim-behavior.service';
import swal from 'sweetalert2';
import { TenGheBehaviorService } from 'src/app/service/ten-ghe-behavior.service';
import { take, map, tap } from 'rxjs/operators';
@Injectable()
export class MyService {
  counter = 300;
  tick = 1000;

  getCounter() {
    return timer(0, this.tick).pipe(take(this.counter), map(() => --this.counter));
  }
}

@Component({
  selector: 'app-trang-dat-ghe',
  templateUrl: './trang-dat-ghe.component.html',
  styleUrls: ['./trang-dat-ghe.component.css'],
  providers: [MyService],
  animations: [
    trigger('focusPanel', [
      // style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
      // style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
      // style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
      transition('inactive => active', animate('1s ease-in', keyframes([
        style({ fontSize: 22, offset: 0 }),
        style({ fontSize: 32, offset: 0.5 }),
        style({ fontSize: 22, offset: 1 }),
      ]))),
      transition('active => inactive', animate('1s ease-out', keyframes([
        style({ fontSize: 22, offset: 0 }),
        style({ fontSize: 32, offset: 0.5 }),
        style({ fontSize: 22, offset: 1 }),
      ]))),

    ]),

    trigger('movePanel', [
      transition('void => *', [
        animate(1000, keyframes([
          style({ opacity: 0, transform: 'translateY(-200px)', offset: 0 }),
          style({ opacity: 1, transform: 'translateY(25px)', offset: .75 }),
          style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
        ]))
      ])
    ]),
  ],
  encapsulation: ViewEncapsulation.None,
})
export class TrangDatGheComponent implements OnInit, OnDestroy, AfterViewInit {

  countDown;
  counter = 300;

  state = 'inactive';
  public MaPhim: string;
  public ChiTietPhim: any = {};
  public subMaLichchieu: Subscription;
  public subDanhSachGhe: Subscription;
  public maLichChieu: string;
  public lichChieu: any = {};
  public DanhSachGheDuocDat: any[] = [];
  numberCount: any = 0;
  numberCountVip: any = 0;
  total: any = 0;

  TenGheF: any = '';
  public mauGhe: any;

  isChecked: any = false;
  // public isLimit:any;

  public listTicket: Array<any> = [];

  @Output() eventIfElse: any = new EventEmitter();
  GheDuocDat: any = false;
  public loadingticket: any = false;
  today: Date = new Date();
  // tslint:disable-next-line:max-line-length
  constructor(private activated: ActivatedRoute, private phimService: PhimServiceService, private titleService: Title, private phimBehavior: PhimBehaviorService, private tenGheP: TenGheBehaviorService, private router: Router, private myService: MyService) { }

  BHDStarCineplex = [
    { RapPhim: 'BHD Star', tenRap: 'Phạm Hùng', image: '../../../assets/img/bhd.png' },
    { RapPhim: 'BHD Star', tenRap: 'Vincom Lê Văn Việt', image: '../../../assets/img/bhd.png' },
  ];

  MangGiaVeThuong = [
    { GiaVe: 5000 }
  ];

  MangGiaVeVip = [
    { GiaVe: 100000 }
  ];

  ngOnInit() {
    this.subMaLichchieu = this.activated.queryParams.subscribe
      ((thamso) => {
        this.maLichChieu = thamso.MaLichChieu;
        this.MaPhim = thamso.MaPhim;
        this.titleService.setTitle(thamso.TenPhim);
        this.phimService.LayChiTietPhim(this.MaPhim).subscribe
          ((res) => {
            this.ChiTietPhim = res;
            console.log(this.ChiTietPhim);
            localStorage.setItem('chiTietPhim', JSON.stringify(this.ChiTietPhim)); // Lưu storage
          });
        this.subDanhSachGhe = this.phimService.LayDanhSachGhe(this.maLichChieu).subscribe
          ((result) => {
            console.log(result);
            this.lichChieu = result;
            // Lưu vào storage
            localStorage.setItem('lichChieu', JSON.stringify(this.lichChieu)); // Lưu storage
          });
      });
    this.countDown = this.myService.getCounter().pipe(tap(() => --this.counter));
  }

  ngAfterViewInit() {
    const wow = new WOW();
    wow.init();
  }

  get value(): any {
    return this.isChecked;
  }

  set value(value: any) {
    this.isChecked = value;
  }

  onChange(isChecked) {
    this.value = isChecked;
  }

  loadBack() {
    location.reload();
    localStorage.setItem('mangVe', '');
  }

  choseSeat() {
    this.loadingticket = true;
    this.loadingticket = { 'margin-left': '4.3%', 'margin-top': '80px', 'float': 'left', 'padding-top': '30px', 'width': '69.7%' };
  }

  minusTicket(gheDat) {
    if (gheDat.GiaVe) {
      this.numberCount--;
      this.total -= gheDat.GiaVe;
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
  }

  ddTicket(gheDat) {
    if (gheDat.GiaVe) {
      this.numberCount++;
      this.total += gheDat.GiaVe;
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
    this.listTicket.push(gheDat);
    console.log('dddd', this.listTicket);
  }

  minusTicket1(gheDat) {
    if (gheDat.GiaVe) {
      this.numberCountVip--;
      this.total -= gheDat.GiaVe;
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
  }

  ddTicket1(gheDat) {
    if (gheDat.GiaVe) {
      this.numberCountVip++;
      this.total += gheDat.GiaVe;
      this.state = (this.state === 'inactive' ? 'active' : 'inactive');
    }
    this.listTicket.push(gheDat);
    console.log('dddd', this.listTicket);
  }

  DatGhe(gheDuocDat: any) {
    if (gheDuocDat.TrangThai) {
      // Nếu trạng thái được đặc bằng true => push ghế đó vào mảng
      this.phimBehavior.listGheDangDat.push({ MaGhe: gheDuocDat.MaGhe, TenGhe: gheDuocDat.TenGhe, GiaVe: gheDuocDat.GiaVe });
      this.tenGheP.TenGheP.push({ MaGhe: gheDuocDat.MaGhe, TenGhe: gheDuocDat.TenGhe, GiaVe: gheDuocDat.GiaVe });
      this.TenGheF = this.tenGheP.TenGheP;
      console.log(this.TenGheF);

      if (this.listTicket.length < this.phimBehavior.listGheDangDat.length) {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Please select the correct ticket number!',
        });
        let i = 0;
        for (const ghe of this.phimBehavior.listGheDangDat) {
          if (ghe.MaGhe === gheDuocDat.MaGhe) {
            this.phimBehavior.listGheDangDat.splice(i, 1);
            this.phimBehavior.isLimit = true;
            // debugger
          }
          i++;
        }

        let j = 0;
        for (const tenGhe of this.TenGheF) {
          if (tenGhe.TenGhe === gheDuocDat.TenGhe) {
            this.TenGheF.splice(j, 1);
          }
          j++;
        }
        // tslint:disable-next-line:max-line-length
      } else if (this.listTicket.length === this.phimBehavior.listGheDangDat.length && this.GheDuocDat !== this.phimBehavior.listGheDangDat.length) {
        swal({
          type: 'success',
          title: 'Select the chair successfully!',
          text: 'You have selected enough tickets!',
        });
        this.GheDuocDat = gheDuocDat.TrangThai;
      }
    } else {
      this.GheDuocDat = gheDuocDat.TrangThai;
      let j = 0;
      for (const tenGhe of this.TenGheF) {
        if (tenGhe.TenGhe === gheDuocDat.TenGhe) {
          this.TenGheF.splice(j, 1);
        }
        j++;
      }

      let i = 0;
      for (const ghe of this.phimBehavior.listGheDangDat) {
        if (ghe.MaGhe === gheDuocDat.MaGhe) {
          this.phimBehavior.listGheDangDat.splice(i, 1);
        }
        i++;
      }
    }
  }

  DatVe() {
    if ($('input[type=\'radio\'][id=\'defaultGroupExample1\']:checked').val()) {
      // tslint:disable-next-line:max-line-length
      window.open(`https://www.nganluong.vn/button_payment.php?receiver=khoa_khoa3484@yahoo.com&product_name=Movie Ticket&price=${this.total}&return_url=http://localhost:9001/payment-succsess/&comments=The purchased ticket is not exchangeable or refundable.`, '_blank');
      const nguoiDung = JSON.parse(localStorage.getItem('nguoiDung'));
      const ve = {
        MaLichChieu: this.maLichChieu,
        TaiKhoanNguoiDung: nguoiDung.TaiKhoan,
        DanhSachVe: this.phimBehavior.listGheDangDat
      };
      localStorage.setItem('mangVe', JSON.stringify(ve)); // Lưu storage
      console.log(ve);
    } else {
      // tslint:disable-next-line:max-line-length
      window.open(`https://www.baokim.vn/payment/product/version11?business=khoa_khoa3484%40yahoo.com&id=&order_description=The+purchased+ticket+is+not+exchangeable+or+refundable.&product_name=Movie+Ticket&product_price=${this.total}&product_quantity=${this.numberCount}${this.numberCountVip}&total_amount=${this.total}&url_cancel=http%3A%2F%2Flocalhost%3A9001&url_detail=http%3A%2F%2Flocalhost%3A9001&url_success=http%3A%2F%2Flocalhost%3A9001%2Fpayment-success-baokim`, '_blank');
      const nguoiDung = JSON.parse(localStorage.getItem('nguoiDung'));
      const ve = {
        MaLichChieu: this.maLichChieu,
        TaiKhoanNguoiDung: nguoiDung.TaiKhoan,
        DanhSachVe: this.phimBehavior.listGheDangDat
      };
      localStorage.setItem('mangVe', JSON.stringify(ve)); // Lưu storage
      console.log(ve);
    }
  }

  ngOnDestroy() {
    this.subDanhSachGhe.unsubscribe();
    this.subMaLichchieu.unsubscribe();
  }

}
