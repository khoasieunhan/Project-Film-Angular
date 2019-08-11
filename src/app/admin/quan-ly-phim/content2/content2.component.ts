import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import { Phim } from 'src/app/models/phim';
import { PhimServiceService } from 'src/app/service/phim-service.service';
declare var $: any;
import WOW from 'wow.js';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ModalPhimService } from 'src/app/service/modal-phim.service';
import { NgForm } from '@angular/forms';
import { ModalPhimAddService } from 'src/app/service/modal-phim-add.service';


@Component({
  selector: 'app-content2',
  templateUrl: './content2.component.html',
  styleUrls: ['./content2.component.css']
})
export class Content2Component implements OnInit, AfterViewInit {
  // public checkboxModel: any;
  // tslint:disable-next-line:max-line-length
  constructor(private phimService: PhimServiceService, private router: Router, private modalPhimService: ModalPhimService, private modalPhimAdd: ModalPhimAddService) { }
  public DSLoaiNguoiDung: any[] = [];
  public DanhSachPhim: Phim[] = [];
  public DanhSachPhimSC: Phim[] = [];
  public MaPhim: any;
  @ViewChild('formEdit') formEdit: NgForm;

  ngOnInit() {
    this.phimService.LayDanhSachPhim().subscribe(
      (kq: any) => {
        this.DanhSachPhim = kq;
        console.log(kq);
      },
      (error: any) => {
        console.log(error);
      }
    );

    this.phimService.LayDanhSachPhimSC().subscribe(
      (kq: any) => {
      this.DanhSachPhimSC = kq;
      console.log(kq);
    },
    (error: any) => {
      console.log(error);
    });
  }

  buttonEdit(phim: any) {
    // tslint:disable-next-line:max-line-length
    const object = { isOpen: true, phim: phim, Title: 'Edit Film: - ' + phim.TenPhim};
    this.modalPhimService.setIsOpenModal(object);
    this.modalPhimService.data.emit(JSON.stringify(object));
  }

  buttonAdd(phim: any) {
    const object = { isOpen: true, phim: phim, Title: 'Add Film'};
    this.modalPhimAdd.setIsOpenModal(object);
    this.modalPhimAdd.data.emit(JSON.stringify(object));
  }

  checkbox(item: any) {
    this.MaPhim = item.MaPhim;
    // if (this.DanhSachPhim.find(x => x === item)) {
    //   this.DanhSachPhim.splice(this.DanhSachPhim.indexOf(item), 1);
    //   console.log(this.DanhSachPhim);
    // } else {
    //   this.DanhSachPhim.push(item);
    //   console.log(this.DanhSachPhim);
    // }
  }

  XoaPhim() {
    this.phimService.XoaPhim(this.MaPhim).subscribe(
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
                'The Film has been deleted.',
                'success'
              ).then(function () {
                location.reload();
              });
            }
          });
        }
      });
  }

  ngAfterViewInit() {
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
}


// ' + $('<div/>').text(data).html() + '
