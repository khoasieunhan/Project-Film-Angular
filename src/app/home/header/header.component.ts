import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NgDungServiceService } from 'src/app/service/ng-dung-service.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ModalHistoryService } from 'src/app/service/modal-history.service';
// import {
//   AuthService,
//   FacebookLoginProvider,
//   GoogleLoginProvider,
//   VkontakteLoginProvider,
//   LinkedinLoginProvider,
//   SocialUser
// } from 'angular-6-social-login-v2';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  public nguoiDung: any = {};
  public dangKy: any = {};
  public isLogin = false;
  public isLogin3 = false;
  public sub: Subscription;
  public TaiKhoan: any;
  public hisToryTicket: any;
  public socialFB: any = {};
  public idFB: any;
  public mailFB: any;
  // public user: SocialUser;
  // public authorized = false;
  // tslint:disable-next-line:max-line-length
  constructor(private svNguoiDung: NgDungServiceService, private router: Router, private modalNgDungHistory: ModalHistoryService) { }
  // , private socialAuthService: AuthService

  // socialSignIn(socialPlatform: string) {
  //   let socialPlatformProvider;
  //   if (socialPlatform === 'facebook') {
  //     socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;
  //   } else if (socialPlatform === 'google') {
  //     socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
  //   } else if (socialPlatform === 'linkedin') {
  //     socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
  //   } else if (socialPlatform === 'vkontakte') {
  //     socialPlatformProvider = LinkedinLoginProvider.PROVIDER_ID;
  //   }

  //   this.socialAuthService.signIn(socialPlatformProvider).then(
  //     (userData) => {
  //       // Now sign-in with userData
  //       console.log(socialPlatform + ' sign in data : ', userData);
  //       // this.authorized = false;
  //       // this.user = userData;
  //       // console.log(this.user);
  //       this.socialFB = userData;
  //       this.idFB = this.socialFB.id;
  //       this.mailFB = this.socialFB.email;
  //       // console.log(this.idFB);
  //       this.isLogin3 = false;
  //       this.svNguoiDung.DangNhap(this.idFB, this.mailFB).subscribe((ketqua) => {
  //         if (ketqua !== 'Tài khoản hoặc mật khẩu không đúng !') {
  //           // tslint:disable-next-line:no-debugger
  //           console.log(ketqua);
  //           this.nguoiDung = ketqua;
  //           this.isLogin3 = false;
  //           swal({
  //             type: 'success',
  //             title: 'Good job!',
  //             text: 'Logged in successfully!',
  //           }).then(function () {
  //             location.reload();
  //           });
  //           // Lưu vào storage
  //           localStorage.setItem('nguoiDung', JSON.stringify(this.nguoiDung)); // Lưu storage
  //           // location.reload(); // Load lại trang sau khi đăng nhập thành công
  //         } else {
  //           this.nguoiDung = {};
  //           this.isLogin3 = true;
  //           localStorage.setItem('nguoiDung', '');
  //         }
  //       });
  //       // Gọi service đăng nhập
  //       // tslint:disable-next-line:no-debugger
  //       // debugger;
  //     }
  //   );
  // }

  ngOnInit() {
    // Kiểm tra trong storage có tài khoản người dùng chưa
    if (localStorage.getItem('nguoiDung')) {
      this.nguoiDung = JSON.parse(localStorage.getItem('nguoiDung'));
      this.TaiKhoan = this.nguoiDung.TaiKhoan;
      this.isLogin = true;
      this.svNguoiDung.HistoryTicket(this.TaiKhoan).subscribe(
        (data: any) => {
          console.log(data);
          this.hisToryTicket = data.DanhSachVeDaDat;
          localStorage.setItem('hisTory', JSON.stringify(this.hisToryTicket));
          console.log(this.hisToryTicket);
          // tslint:disable-next-line:max-line-length
          const object = { isOpen: true, hisTory: data.TaiKhoan, hisToryTicket: this.hisToryTicket, Title: 'History buy ticket - ' + data.TaiKhoan };
          console.log(object);
          this.modalNgDungHistory.setIsOpenModal(object);
          this.modalNgDungHistory.data.emit(JSON.stringify(object));
        });
    }
  }

  DangNhap(taikhoan: string, matkhau: string, socialPlatform: string) {
    // Gọi service đăng nhập
    this.sub = this.svNguoiDung.DangNhap(taikhoan, matkhau).subscribe((ketqua) => {
      if (ketqua !== 'Tài khoản hoặc mật khẩu không đúng !') {
        console.log(ketqua);
        this.nguoiDung = ketqua;
        this.isLogin = false;
        swal({
          type: 'success',
          title: 'Good job!',
          text: 'Logged in successfully!',
        }).then(function () {
          location.reload();
        });
        // Lưu vào storage
        localStorage.setItem('nguoiDung', JSON.stringify(this.nguoiDung)); // Lưu storage
        // location.reload(); // Load lại trang sau khi đăng nhập thành công
      } else {
        this.nguoiDung = {};
        this.isLogin = true;
        localStorage.setItem('nguoiDung', '');
      }
    });
  }

  DangXuat() {
    localStorage.removeItem('nguoiDung');
    localStorage.setItem('mangVe', '');
    localStorage.setItem('mangVe', '');
    localStorage.setItem('chiTietPhim', '');
    localStorage.setItem('lichChieu', '');
    localStorage.setItem('ngDung', '');
    localStorage.setItem('Admin', '');
    localStorage.setItem('hisTory', '');
    // this.socialAuthService.signOut();
    location.href = ''; // Load lại trang sau khi đăng xuất
  }

  DangKy(NguoiDung: any) {
    const pushMaloai = {
      MaNhom: NguoiDung.MaNhom = 'GP01',
      MaLoaiNguoiDung: NguoiDung.MaLoaiNguoiDung = 'KhachHang'
    };
    console.log(NguoiDung);
    // tslint:disable-next-line:max-line-length
    this.sub = this.svNguoiDung.DangKy(NguoiDung, pushMaloai).subscribe((ketqua: any) => {
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
        location.reload(); // Load lại trang sau khi đăng nhập thành công
      } else {
        this.dangKy = {};
        this.isLogin = true;
        localStorage.setItem('dangKy', '');
      }
    });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
