import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared/shared.component';

console.log('Shared init');

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SharedComponent
  ],
  exports: [
    SharedComponent
  ],
})
export class SharedModule { }
