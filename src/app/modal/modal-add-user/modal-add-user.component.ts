import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ModalAddUserService } from 'src/app/service/modal-add-user.service';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-add-user',
  templateUrl: './modal-add-user.component.html',
  styleUrls: ['./modal-add-user.component.css']
})
export class ModalAddUserComponent implements OnInit, OnDestroy {

  public DSLoaiNguoiDung: any = [];
  public isOpen = false;
  public sub: Subscription;
  public ngDung: any;
  public Title = '';
  public selectedSalle: any;
  dangKy: any;
  isLogin = false;
  constructor(private modalAddUserService: ModalAddUserService, private svNguoiDung: NgDungServiceService, private router: Router) { }

  ngOnInit() {
    this.sub = this.modalAddUserService.data.subscribe(
      (data: any) => {
        const ob = JSON.parse(data);
        this.ngDung = ob.ngDung;
        this.isOpen = ob.isOpen;
        this.Title = ob.Title;
      });

      this.svNguoiDung.LayDSLoaiNguoiDung().subscribe(
        (kq: any) => {
          this.DSLoaiNguoiDung = kq;
          console.log(kq);
        },
        (error: any) => {
          console.log(error);
        }
      );
  }

  clickAddUser(ngDung: any) {
    // this.selectedSalle = ngDung.MaLoaiNguoiDung;
    // this.selectedSalle = this.DSLoaiNguoiDung;
    const pushMaloai = {
      MaNhom: ngDung.MaNhom,
      MaLoaiNguoiDung: this.selectedSalle = ngDung.MaLoaiNguoiDung
    };
    console.log(ngDung);
    // tslint:disable-next-line:max-line-length
    this.sub = this.svNguoiDung.DangKy(ngDung, pushMaloai).subscribe((ketqua: any) => {
      if (ketqua !== 'Đăng ký thất bại') {
        this.dangKy = ketqua;
        this.isLogin = false;
        swal({
          type: 'success',
          title: 'Good job!',
          text: 'Sign Up Success!',
        }).then(function () {
          location.reload();
        });
        // Lưu vào storage
        localStorage.setItem('dangKy', JSON.stringify(this.dangKy)); // Lưu storage
        // location.reload(); // Load lại trang sau khi đăng nhập thành công
        if (ketqua === 'Tài khoản đã tồn tại') {
          swal({
            type: 'warning',
            title: 'Account already exists!',
            text: 'Please enter a different account!',
          }).then(function () {
            // location.reload();
          });
          this.router.navigate(['/admin/quan-ly-nguoi-dung']);
        }
      } else {
        this.dangKy = {};
        this.isLogin = true;
        localStorage.setItem('dangKy', '');
      }
    });

  }

  addSalleToSelected(value) {
    // tslint:disable-next-line:max-line-length
    this.ngDung = this.DSLoaiNguoiDung.find(ngDung => ngDung.MaLoaiNguoiDung === value); // find selected object by finding in original data by ID
}

  CloseModal() {
    this.isOpen = false;
  }

  ngOnDestroy () {
    this.sub.unsubscribe();
  }
}
