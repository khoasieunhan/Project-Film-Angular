import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/service/modal.service';
import { NguoiDung } from 'src/app/models/nguoiDung';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import swal from 'sweetalert2';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit, OnDestroy {

  public sub: Subscription;
  public ngDung: any;
  public isOpen = false;
  public Title = '';
  public DanhSachNguoiDung: NguoiDung[] = [];
  public errorMessage = false;
  @ViewChild('formEdit') formEdit: NgForm;
  constructor(private modalService: ModalService, private ngDungService: NgDungServiceService) { }

  ngOnInit() {
    this.modalService.data.subscribe(
      (data: any) => {
        const ob = JSON.parse(data);
        this.ngDung = ob.ngDung;
        this.isOpen = ob.isOpen;
        this.Title = ob.Title;
      });
  }

  EditUser(NgDung: any) {
    this.ngDungService.CapNhatNguoiDung(NgDung).subscribe(
      (kq: any) => {
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
              'The Account has been edit.',
              'success'
            ).then(function () {
              location.reload();
            });
          }
        });
      });
  }

  CloseModal() {
    this.isOpen = false;
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
