import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './resetPassword.component';
import { FormsModule }   from '@angular/forms';

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule],
    declarations: [ResetPasswordComponent],
    exports: [ResetPasswordComponent]
})

export class ResetPasswordModule { }
