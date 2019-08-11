import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { QuanLyPhimComponent } from './quan-ly-phim/quan-ly-phim.component';
import { QuanLiNguoiDungComponent } from './quan-li-nguoi-dung/quan-li-nguoi-dung.component';
import { PipeModule } from '../pipe/pipe.module';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'ngx-moment';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { Title } from '@angular/platform-browser';
import { ContentComponent } from './admin-layout/content/content.component';
import { Content1Component } from './quan-li-nguoi-dung/content1/content1.component';
import { Content2Component } from './quan-ly-phim/content2/content2.component';
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { AuthGuard } from '../guard/auth.guard';

const adminRoutes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: '', component: LayoutAdminComponent, children: [
    { path: '', component: AdminLayoutComponent},
    { path: 'quan-ly-nguoi-dung', component: QuanLiNguoiDungComponent },
    { path: 'quan-ly-phim', component: QuanLyPhimComponent },
  ]},
];

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [AdminLayoutComponent, QuanLyPhimComponent, QuanLiNguoiDungComponent, LoginComponent, ContentComponent, Content1Component, Content2Component, LayoutAdminComponent],
  exports: [
    // tslint:disable-next-line:max-line-length
    AdminLayoutComponent, QuanLyPhimComponent, QuanLiNguoiDungComponent, LoginComponent, ContentComponent, Content1Component, Content2Component],
  imports: [
    CommonModule,
    PipeModule,
    RouterModule,
    HttpModule,
    MomentModule,
    FormsModule,
    PipeModule,
    RouterModule.forChild(adminRoutes)
  ],
  providers: [Title],
})
export class AdminModule { }
