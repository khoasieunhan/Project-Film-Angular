import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { AuthGuard } from './guard/auth.guard';

// const routes: Routes = [
//   {
//     path: '', component: HomeLayoutComponent, children: [
//       { path: '', component: TrangChuComponent },
//       { path: 'trang-chu', component: TrangChuComponent },
//       { path: 'trang-chi-tiet', component: TrangChiTietComponent },
//       { path: 'trang-dat-ve', component: TrangDatGheComponent, canActivate: [IsBookingGuard] },
//     ]
//   },
// ];

const appRoutes: Routes = [
  { path: '', loadChildren: () => HomeModule },
  { path: 'home', loadChildren: () => HomeModule },
  { path: 'admin', loadChildren: () => AdminModule, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [HttpModule, HomeModule, AdminModule, RouterModule.forChild(appRoutes), RouterModule.forRoot(appRoutes)],
  exports: [RouterModule, HttpModule, HomeModule, AdminModule],
  declarations: []
})
export class AppRoutingModule { }