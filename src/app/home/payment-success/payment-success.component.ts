import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PhimServiceService } from 'src/app/service/phim-service.service';
// import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import * as html2canvas from 'html2canvas';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import { ModalHistoryService } from 'src/app/service/modal-history.service';
// import * as jsPDF from 'jspdf';
declare var jsPDF: any;
declare var $: any;

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymentSuccessComponent implements OnInit, OnDestroy {

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

  @ViewChild('myTableIdElementId') myTableIdElementId: ElementRef;

  exportPDF() {
    const data = document.getElementById('myTableIdElementId');
    html2canvas(data).then(canvas => {
      // Few necessary setting options
      const imgWidth = 208;
      const pageHeight = 895;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, pageHeight, heightLeft);
      pdf.save('ExportBill.pdf'); // Generated PDF
    });
  }

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
          // swal({
          //   type: 'success',
          //   title: 'Good job!',
          //   text: 'Buy tickets successfully!',
          // }).then(function () {
          //   location.reload();
          // });
          console.log(kq);
          // alert(kq);
          // location.reload();
        }
      });
    }

    this.subParams = this.activated.queryParams.subscribe(
      (data: any) => {
        this.total = data.price;
        this.orderCode = data.order_code;
        this.ticketCode = data.payment_id;
        console.log(data);
      });
  }

  ngOnDestroy() {
    this.subParams.unsubscribe();
  }
}
