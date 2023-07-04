import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { triviaFeatureHomeRoutes } from './lib.routes';
import { HomeComponent } from './home/home.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(triviaFeatureHomeRoutes), ButtonModule],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class TriviaFeatureHomeModule {}
