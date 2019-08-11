import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import { ModalHistoryService } from 'src/app/service/modal-history.service';
import { Title } from '@angular/platform-browser';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-payment-success-baokim',
  templateUrl: './payment-success-baokim.component.html',
  styleUrls: ['./payment-success-baokim.component.css']
})
export class PaymentSuccessBaokimComponent implements OnInit {
  public chiTietPhim: any = {};
  public getLichChieu: any;
  public getRap: any;
  public nguoiDung: any = {};
  public mangVe: any = {};
  public getDanhSachVe: any;
  public subParams: Subscription;
  // , private exportAsService: ExportAsService
  total: any;
  ticketCode: any;
  orderCode: any;
  taikhoan: any;
  today: Date = new Date();
  public hisToryTicket: any[] = [];

  // tslint:disable-next-line:max-line-length
  constructor(private activated: ActivatedRoute, private titleService: Title, private phimService: PhimServiceService, private ngDungService: NgDungServiceService, modalNgDungHistory: ModalHistoryService) { }

  ngOnInit() {
    this.titleService.setTitle('Payment Success');
     // Kiểm tra trong storage có chiTietPhim chưa
     if (localStorage.getItem('chiTietPhim')) {
      this.chiTietPhim = JSON.parse(localStorage.getItem('chiTietPhim'));
      this.getLichChieu = this.chiTietPhim.LichChieu;
    }
    // Kiểm tra trong storage có tài khoản người dùng chưa
    if (localStorage.getItem('nguoiDung')) {
      this.nguoiDung = JSON.parse(localStorage.getItem('nguoiDung'));
      this.taikhoan = this.nguoiDung.TaiKhoan;
      this.ngDungService.HistoryTicket(this.taikhoan).subscribe(
        (data: any) => {
        //   // Lưu vào storage
        // localStorage.setItem('hisTory', JSON.stringify(this.nguoiDung)); // Lưu storage
          console.log(data);

        });
    }
    // Kiểm tra trong storage có tài khoản có mảng vé chưa
    if (localStorage.getItem('mangVe')) {
      this.mangVe = JSON.parse(localStorage.getItem('mangVe'));
      this.getDanhSachVe = this.mangVe.DanhSachVe;
      console.log(this.getDanhSachVe);
      // Gọi service đặt vé
      this.subParams = this.phimService.DatVe(this.mangVe).subscribe((kq) => {
        if (kq) {
          swal({
            type: 'success',
            title: 'Good job!',
            text: 'Buy tickets successfully!',
          });
          console.log(kq);
          // alert(kq);
          // location.reload();
        }
      });
    }

  }

}
