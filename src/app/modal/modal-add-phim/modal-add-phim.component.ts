import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhimServiceService } from 'src/app/service/phim-service.service';
import { ModalPhimAddService } from 'src/app/service/modal-phim-add.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-modal-add-phim',
  templateUrl: './modal-add-phim.component.html',
  styleUrls: ['./modal-add-phim.component.css']
})
export class ModalAddPhimComponent implements OnInit, OnDestroy {

  public isOpen = false;
  public sub: Subscription;
  public phim: any;
  public Title = '';

  TenPhim: any;
  selecetdFile: File;
  imagePreview: any;
  constructor(private modalPhimAddService: ModalPhimAddService, private phimService: PhimServiceService) { }

  ngOnInit() {
    this.modalPhimAddService.data.subscribe(
      (data: any) => {
        const ob = JSON.parse(data);
        this.phim = ob.phim;
        this.isOpen = ob.isOpen;
        this.Title = ob.Title;
      });
  }

  onFileUpload(event: any) {
    // this.selecetdFile = event.target.files[0];
    // const reader = new FileReader();
    // reader.onload = () => {
    //   this.imagePreview = reader.result;
    // };
    // reader.readAsDataURL(this.selecetdFile);
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
    console.log(this.selecetdFile, this.selecetdFile.name);
    this.phimService.postFile(this.selecetdFile, this.TenPhim).subscribe(
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

  addPhim(phim: any) {
    console.log(phim);
    this.TenPhim = phim.HinhAnh;
    this.sub = this.phimService.ThemPhimMoi(phim).subscribe(
      (kq: any) => {
        console.log(kq);
        if (kq) {
          swal({
            type: 'success',
            title: 'Good job!',
            text: 'Add new film Success!',
          }).then(function () {
            location.reload();
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

}
