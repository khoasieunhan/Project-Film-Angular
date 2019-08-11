import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalPhimComponent } from './modal-phim/modal-phim.component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { MomentModule } from 'ngx-moment';
import { ModalAddUserComponent } from './modal-add-user/modal-add-user.component';
import { ModalAddPhimComponent } from './modal-add-phim/modal-add-phim.component';
import { ModalHistoryComponent } from './modal-history/modal-history.component';
import { ModalTrailerPhimComponent } from './modal-trailer-phim/modal-trailer-phim.component';
import { FileSelectDirective } from 'ng2-file-upload';

@NgModule({
  // tslint:disable-next-line:max-line-length
  declarations: [ModalComponent, ModalPhimComponent, ModalAddUserComponent, ModalAddPhimComponent, ModalHistoryComponent, ModalTrailerPhimComponent, FileSelectDirective],
  exports: [
    ModalComponent,
    ModalPhimComponent,
    ModalAddUserComponent,
    ModalAddPhimComponent,
    ModalHistoryComponent,
    ModalTrailerPhimComponent
  ],
  imports: [
    CommonModule,
    PipeModule,
    RouterModule,
    HttpModule,
    MomentModule,
    FormsModule
  ]
})
export class ModalModule { }
