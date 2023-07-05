import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { triviaFeatureHomeRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(triviaFeatureHomeRoutes), ButtonModule, ReactiveFormsModule, InputTextModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class TriviaFeatureHomeModule {}
