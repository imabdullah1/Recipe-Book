import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert/alert.component';
import { SpinnerComponent } from './loading/spinner/spinner.component';
import { DropdownDirective } from './dropdown.directive';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlertComponent, SpinnerComponent, DropdownDirective],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AlertComponent,
    SpinnerComponent,
    DropdownDirective,
  ],
})
export class SharedModule {}
