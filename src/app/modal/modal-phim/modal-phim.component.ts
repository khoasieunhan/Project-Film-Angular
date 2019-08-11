import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { ModalPhimService } from 'src/app/service/modal-phim.service';
import * as moment from 'moment';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert2';
// import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
declare var $: any;

// const URL = 'http://localhost:3000/api/upload';
// const URL = `http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile`;

@Component({
  selector: 'app-modal-phim',
  templateUrl: './modal-phim.component.html',
  styleUrls: ['./modal-phim.component.css']
})
export class ModalPhimComponent implements OnInit, OnDestroy, AfterViewInit {
  public isOpen = false;
  public sub: Subscription;
  public phim: any;
  public Title = '';

  // title = 'app';
  // public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  TenPhim: any;
  selecetdFile: File;
  imagePreview: any;

  @ViewChild('formEdit') formEdit: NgForm;
  constructor(private modalPhimService: ModalPhimService, private phimService: PhimServiceService) {}

  ngOnInit() {
    this.sub = this.modalPhimService.data.subscribe(
      (data: any) => {
        const ob = JSON.parse(data);
        this.phim = ob.phim;
        this.isOpen = ob.isOpen;
        this.Title = ob.Title;
    });
  }

//   this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  //   this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
  //   this.phimService.UpPostFile(this.selecetdFile, this.TenPhim).subscribe(
  //     (kq: any) => {
  //       console.log(kq);
  //       if (kq) {
  //         swal({
  //           type: 'success',
  //           title: 'Good job!',
  //           text: 'Upload image Success!',
  //         });
  //       }
  //     });
  //   };

  onFileUpload(event) {
    if (event.target.files && event.target.files[0]) {
      this.selecetdFile = event.target.files[0];
      const reader = new FileReader();

      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = () => {
        this.imagePreview = reader.result;
      };

      reader.readAsDataURL(this.selecetdFile);
      console.log(this.selecetdFile);
    }
  }

  OnUploadFile() {
    this.phimService.UpPostFile(this.selecetdFile, this.TenPhim).subscribe(
      (kq: any) => {
        console.log(kq);
        if (kq) {
          swal({
            type: 'success',
            title: 'Good job!',
            text: 'Upload image Success!',
          });
        }
    });
  }

  EditPhim(Phim: any) {
    this.TenPhim = Phim.HinhAnh;
    console.log(Phim);
    this.sub = this.phimService.CapNhatPhim(Phim).subscribe(
      (kq: any) => {
        if (kq) {
          swal({
            title: 'Are you sure?',
            text: 'You won\'t be able to revert this!',
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, edit it!'
          }).then((result) => {
            if (result.value) {
              swal(
                'Update!',
                'The Film has been edit.',
                'success'
              ).then(function () {
                location.reload();
              });
            }
          });
        }
      });
  }

  CloseModal() {
    this.isOpen = false;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  ngAfterViewInit() {
    // $('input').on('change', function () {
    //   this.setAttribute(
    //     'data-ngkhoichieu',
    //     moment(this.value, 'dd.MM.yyyy')
    //       .format(this.getAttribute('data-ngkhoichieu'))
    //   );
    // }).trigger('change');
  }
}
