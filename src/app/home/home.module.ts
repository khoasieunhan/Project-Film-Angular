import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SliderComponent } from './slider/slider.component';
import { LoaiPhimComponent } from './loai-phim/loai-phim.component';
import { ToolDropdownComponent } from './tool-dropdown/tool-dropdown.component';
import { PhimDangChieuComponent } from './phim-dang-chieu/phim-dang-chieu.component';
import { PhimSapChieuComponent } from './phim-sap-chieu/phim-sap-chieu.component';
import { ItemPhimComponent } from './item-phim/item-phim.component';
import { NewsComponent } from './news/news.component';
import { FilmComponent } from './film/film.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AppActionComponent } from './app-action/app-action.component';
import { FooterComponent } from './footer/footer.component';
import { TrangDatGheComponent } from './trang-dat-ghe/trang-dat-ghe.component';
import { DanhSachGheComponent } from './trang-dat-ghe/danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './trang-dat-ghe/ghe/ghe.component';
import { TrangChiTietComponent } from './trang-chi-tiet/trang-chi-tiet.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { PipeModule } from '../pipe/pipe.module';
import { AdvertiseComponent } from './advertise/advertise.component';
import { Routes, RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { IsBookingGuard } from '../guard/is-booking.guard';
import { MainChooseFilmComponent } from './main-choose-film/main-choose-film.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { PaymentSuccessBaokimComponent } from './payment-success-baokim/payment-success-baokim.component';

const routes: Routes = [
  {
    path: '', component: HomeLayoutComponent, children: [
      { path: '', component: TrangChuComponent },
      { path: 'trang-chu', component: TrangChuComponent },
      { path: 'trang-chi-tiet', component: TrangChiTietComponent },
      { path: 'trang-dat-ve', component: TrangDatGheComponent, canActivate: [IsBookingGuard] },
      { path: 'payment-succsess', component: PaymentSuccessComponent },
      { path: 'payment-success-baokim', component: PaymentSuccessBaokimComponent},
    ]
  },
];

@NgModule({
  declarations:
    [HeaderComponent,
      SliderComponent,
      LoaiPhimComponent,
      ToolDropdownComponent,
      PhimDangChieuComponent,
      PhimSapChieuComponent,
      ItemPhimComponent,
      NewsComponent,
      FilmComponent,
      ReviewsComponent,
      PromotionComponent,
      AppActionComponent,
      FooterComponent,
      TrangDatGheComponent,
      DanhSachGheComponent,
      GheComponent,
      TrangChiTietComponent,
      TrangChuComponent,
      AdvertiseComponent,
      HomeLayoutComponent,
      MainChooseFilmComponent,
      PaymentSuccessComponent,
      PaymentSuccessBaokimComponent,
    ],
  exports:
    [
      HeaderComponent,
      SliderComponent,
      LoaiPhimComponent,
      ToolDropdownComponent,
      PhimDangChieuComponent,
      PhimSapChieuComponent,
      ItemPhimComponent,
      NewsComponent,
      FilmComponent,
      ReviewsComponent,
      PromotionComponent,
      AppActionComponent,
      FooterComponent,
      TrangDatGheComponent,
      DanhSachGheComponent,
      GheComponent,
      TrangChiTietComponent,
      TrangChuComponent,
      HomeLayoutComponent,
      MainChooseFilmComponent,
      PaymentSuccessComponent,
      PaymentSuccessBaokimComponent
      // PipeModule
    ],
  providers: [Title],
  imports: [
    CommonModule,
    PipeModule,
    RouterModule,
    HttpModule,
    MomentModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
