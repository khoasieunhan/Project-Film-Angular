import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild } from '@angular/core';
import { NguoiDung } from 'src/app/models/nguoiDung';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
declare var $: any;
import WOW from 'wow.js';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/service/modal.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';
import { ModalAddUserService } from 'src/app/service/modal-add-user.service';
import { ModalHistoryService } from 'src/app/service/modal-history.service';

@Component({
  selector: 'app-content1',
  templateUrl: './content1.component.html',
  styleUrls: ['./content1.component.css']
})
export class Content1Component implements OnInit, AfterViewInit, OnDestroy {
  public layDanhSachNguoiDung: NguoiDung[] = [];
  public layDanhSachNguoiDungGB2: NguoiDung[] = [];
  public ngDung: any;
  public TaiKhoan: any;
  public hisTory: any;
  public sub: Subscription;
  public hisToryTicket: any[] = [];
  @ViewChild('formEdit') formEdit: NgForm;
  // tslint:disable-next-line:max-line-length
  constructor(private ngDungSV: NgDungServiceService, private router: Router, private modalService: ModalService, private modalNgDungAdd: ModalAddUserService, private modalNgDungHistory: ModalHistoryService) { }

  ngOnInit() {

    this.ngDungSV.LayDanhSachNguoiDung().subscribe(
      (kq: any) => {
        this.layDanhSachNguoiDung = kq;
        console.log(kq);
        localStorage.setItem('ngDung', JSON.stringify(this.layDanhSachNguoiDung));
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.ngDungSV.LayDanhSachNguoiDungGB2().subscribe(
      (kq: any) => {
        this.layDanhSachNguoiDungGB2 = kq;
        console.log(kq);
        localStorage.setItem('ngDung2', JSON.stringify(this.layDanhSachNguoiDungGB2));
      },
      (eror: any) => {
        console.log(eror);
      }
    );
  }

  buttonEdit(ngDung: any) {
    // tslint:disable-next-line:max-line-length
    const object = { isOpen: true, ngDung: ngDung, Title: 'Edit Account - ' + ngDung.TaiKhoan };
    this.modalService.setIsOpenModal(object);
    this.modalService.data.emit(JSON.stringify(object));
  }

  buttonAdd(ngDung: any) {
    const object = { isOpen: true, ngDung: ngDung, Title: 'Add Account' };
    this.modalNgDungAdd.setIsOpenModal(object);
    this.modalNgDungAdd.data.emit(JSON.stringify(object));
  }

  buttonHistory(ngDung: any) {
    this.TaiKhoan = ngDung.TaiKhoan;
    this.ngDungSV.HistoryTicket(this.TaiKhoan).subscribe(
      (kq: any) => {
        this.hisToryTicket = kq.DanhSachVeDaDat;
        localStorage.setItem('hisTory', JSON.stringify(this.hisToryTicket));
        console.log(this.hisToryTicket);
       // tslint:disable-next-line:max-line-length
       const object = { isOpen: true, hisTory: ngDung.TaiKhoan, hisToryTicket: this.hisToryTicket, Title: 'History buy ticket - ' + ngDung.TaiKhoan };
       console.log(object);
       this.modalNgDungHistory.setIsOpenModal(object);
       this.modalNgDungHistory.data.emit(JSON.stringify(object));
      });
  }

  checkbox(item: any) {
    this.TaiKhoan = item.TaiKhoan;
    console.log(this.TaiKhoan);
    // if (this.DanhSachPhim.find(x => x === item)) {
    //   this.DanhSachPhim.splice(this.DanhSachPhim.indexOf(item), 1);
    //   console.log(this.DanhSachPhim);
    // } else {
    //   this.DanhSachPhim.push(item);
    //   console.log(this.DanhSachPhim);
    // }
  }

  XoaNgDung() {
    this.ngDungSV.XoaNgDung(this.TaiKhoan).subscribe(
      (kq: any) => {
        if (kq) {
          swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.value) {
              swal(
                'Deleted!',
                'The Account has been deleted.',
                'success'
              ).then(function () {
                location.reload();
              });
            }
          });
        }
        // this.router.navigate(['/admin']);
      });
  }

  ngAfterViewInit() {
    const wow = new WOW();
    wow.init();

    // Call the dataTables jQuery plugin
    $(document).ready(function () {
      const table = $('#example').DataTable({
        fixedColumns: {
          leftColumns: 2
        },
        columnDefs: [{
          orderable: false,
          className: 'select-checkbox',
          targets: 0,
          // 'render': function (data, type, full, meta) {
          //   return '<input type="checkbox" name="MaPhim" value="' + $('<div/>').text(data).html() + '" (change)="checkbox(phim)">';
          // }
        }],
        select: {
          style: 'os',
          selector: 'td:first-child'
        },
        order: [[1, 'asc']]
      });
      table.rows().invalidate().draw();
    });
    // const table = $('#example').DataTable();
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
