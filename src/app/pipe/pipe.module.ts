import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafePipe } from './safe.pipe';
import { ShortcutPipe } from './shortcut.pipe';
import { FormatTimePipe } from './format-time.pipe';

@NgModule({
  declarations: [SafePipe, ShortcutPipe, FormatTimePipe],
  imports: [
    CommonModule
  ],
  exports: [
    SafePipe,
    ShortcutPipe,
    FormatTimePipe
  ],
})
export class PipeModule { }
